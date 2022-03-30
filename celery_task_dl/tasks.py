"""
This tasks.py now is for exploring the Celery, later we need to
re-define it
"""
from __future__ import absolute_import, unicode_literals
from .worker import app

# import cv2
import os
import numpy as np
import torch
from PIL import Image
from ml.modules import normalize_input, ImageModel, CFG


@app.task
def add(x, y):
    return x + y

@app.task
def feature_extraction(file_name, file_path="../web/search/uploads"):
    """
    TBD
    """

    # img = cv2.imread(file)
    # img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    file = os.path.join(
        os.path.abspath(os.getcwd()),
        "upload",
        file_name
    )
    img_file = Image.open(file)
    img = np.asarray(img_file)


    img_t = normalize_input(img)
    normd_img = img_t["image"]

    normd_img = normd_img.astype(np.float32)
    normd_img = normd_img.transpose(2,0,1)

    #print(f"shape of normd_img: {normd_img.shape}")
    #print(f"\n Value of normd_img[2][511]: {normd_img[2][511]} \n")
    normd_img = np.expand_dims(normd_img, axis=0)
    normd_img = torch.tensor(normd_img).float()

    #print(normd_img.shape)

    #normd_img = normd_img.transpose(2,0,1)

    model = ImageModel(model_name=CFG.model_name, pretrained=True)
    model.eval()
    model.to(CFG.device)

    # Inference dont need label
    label = torch.tensor(1).int()

    with torch.no_grad():
        feat = model(normd_img, label)
        embeddings_list = feat.detach().cpu().numpy().tolist()

    return embeddings_list
