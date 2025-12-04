#!/bin/bash
set -e

echo "Running format check and fix..."
pnpm format

echo "Running lint check..."
pnpm lint

echo "Running build check (no emit)..."
pnpm type-check

echo "All checks passed!"
