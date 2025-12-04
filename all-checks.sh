#!/bin/bash
set -e

echo "Running check.sh..."
bash check.sh

echo ""
echo "Running health.sh..."
bash health.sh

echo ""
echo "All checks completed successfully!"
