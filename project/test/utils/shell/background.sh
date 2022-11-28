#!/usr/bin/env sh
# start "" "%PROGRAMFILES%\Git\bin\sh.exe" --login -i -c "/c/Users/Usuario/Documents/utn/course\ node\ 02c2022/project/test/utils/shell/background.sh -c 'npm start --prefix=jhoan_carrero/project/server' -o 'project/test/logs/debug.txt'" "%~1"
# start "" "%PROGRAMFILES%\Git\bin\sh.exe" --login -i -c 
#   "
#   /c/Users/Usuario/Documents/utn/course\ node\ 02c2022/project/test/utils/shell/background.sh
#       -c 'npm start --prefix=jhoan_carrero/project/server' 
#       -o 'project/test/logs/debug.txt'
#   "
# "%~1"

while getopts o:c: flag
do
    case "${flag}" in
        o) OUTPUT=${OPTARG};;
        c) COMMAND=${OPTARG};;
    esac
done
nohup $COMMAND >>${OUTPUT:-/dev/null} 2>&1 &
PID=$!;

if [ -z "$windir"]; then
    echo "Ejecutando el comando '$COMMAND' con PID='$PID'";
    echo -e "\n\tEsta ventana la podes cerrar cuando desees detener el servidor!";
else
    echo $PID;
fi
exit 0;