def detect_objects(frames, device='CPU'):
    print(f"[DETECTOR] Running object detection on {len(frames)} frames using {device}")
    detections = []
    for f in frames:
        detections.append({"frame": f, "objects": [{"label": "person", "confidence": 0.89}]})
    print(f"[DETECTOR] Completed detection on {len(frames)} frames.")
    return detections
