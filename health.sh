#!/bin/bash
set -e

echo "Checking for outdated dependencies..."
pnpm outdated

echo "Checking for vulnerabilities..."
pnpm audit

echo "All health checks passed!"
