"""
This tasks.py now is for exploring the Celery, later we need to
re-define it
"""
from __future__ import absolute_import, unicode_literals
import faiss
import numpy as np

from .worker import app


@app.task
def faissIndexing(vector, embeddings_path="./celery_task_faiss/embeddings/embeddings.npy", top_k=42):
    """
    TBD
    """
    if vector:
        feature_vector = np.array(vector)
    else:
        raise ValueError(
            f"ValueError exception thrown, because input feature vector: {vector}"
        )

    embeddings = np.load(embeddings_path)
    _, d = embeddings.shape

    # Build the index
    index = faiss.IndexFlatL2(d)
    index.add(embeddings)

    _, topk_indexes = index.search(feature_vector, top_k)
    topk_list = list(topk_indexes[0])

    result = []
    for i in topk_list:
        result.append({
            "index": topk_list.index(i),
            "img": f'https://storage.googleapis.com/neural-search-prod/{i}.jpg',
            "title": f'Image Index {i}',
            "desc": "Demo Image"
            })

    return json.dumps(result)
