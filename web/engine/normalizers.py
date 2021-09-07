"""
Provides normalization function for different kinds of data:
Image, Audio, Text ...
"""
import numpy as np
import albumentations

# This normalizer is the one has been trained at Kaggle Notebook,
# please keep these parmaeters with out put embeddings
image_normalizer = albumentations.Compose([
    albumentations.Resize(512, 512),
    albumentations.Normalize()
])
