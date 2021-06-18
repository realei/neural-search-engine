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
    albumentations.HorizontalFlip(p=0.5),
    albumentations.RandomBrightnessContrast(p=0.5, brightness_limit=(-0.2, 0.2), contrast_limit=(-0.2, 0.2)),
    albumentations.HueSaturationValue(p=0.5, hue_shift_limit=0.2, sat_shift_limit=0.2, val_shift_limit=0.2),
    albumentations.ShiftScaleRotate(p=0.5, shift_limit=0.0625, scale_limit=0.2, rotate_limit=20),
    albumentations.CoarseDropout(p=0.5),
    albumentations.Normalize()
])
