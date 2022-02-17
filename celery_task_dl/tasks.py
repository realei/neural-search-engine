"""
This tasks.py now is for exploring the Celery, later we need to
re-define it
"""
from __future__ import absolute_import, unicode_literals
from .worker import app

import cv2
import numpy as np
from PIL import Image
from engine.modules import normalize_input, ImageModel, CFG


@app.task
def add(x, y):
    return x + y

@app.task
def feature_extraction(file):
    """
    TBD
    """
    img = cv2.imread(file)
    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)


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
        img_embeddings = feat.detach().cpu().numpy()

    return img_embeddings
