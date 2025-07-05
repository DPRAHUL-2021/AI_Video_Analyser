def classify_objects(detections, device='CPU'):
    print(f"[CLASSIFIER] Classifying {len(detections)} detected objects using {device}")
    for det in detections:
        for obj in det['objects']:
            obj['class'] = "human" if obj['label'] == "person" else "unknown"
    print(f"[CLASSIFIER] Classification completed.")
    return detections
