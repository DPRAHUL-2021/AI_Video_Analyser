def log_metrics(classifications):
    total_detections = sum(len(c['objects']) for c in classifications)
    print(f"[METRICS] Total detections processed: {total_detections}")
    print("[METRICS] Example classification data:")
    print(classifications[0] if classifications else "No classifications available.")
