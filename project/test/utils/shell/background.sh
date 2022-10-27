#!/usr/bin/env sh
while getopts o:c: flag
do
    case "${flag}" in
        o) OUTPUT=${OPTARG};;
        c) COMMAND=${OPTARG};;
    esac
done
nohup $COMMAND >>${OUTPUT:-/dev/null} 2>&1 &
PID=$!
echo $PID