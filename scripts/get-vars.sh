#!/bin/bash

STAGE=dev

function usage() {
  echo "`dirname $0`/`basename $0` <options>"
  echo "  Options:"
  echo "  -s, --stage          Stage"
  echo "  -n, --service-name   Service Name"
  echo "  -o, --output-file    Filename output"
  exit 1
}
while [[ $# -gt 0 ]]
do
  key="$1"

  case $key in
      -s)
      STAGE="$2"
      shift # past argument
      shift # past value
      ;;
      -n)
      SERVICE="$2"
      shift # past argument
      shift # past value
      ;;
      -o)
      OUTPUT="$2"
      shift # past argument
      shift # past value
      ;;
      *)    # unknown option
      usage
      ;;
  esac
done

if [ "${SERVICE}" == "" ]; then usage; fi;

if [ "${OUTPUT}" != "" ]
then
  OUTPUT="> ${OUTPUT}"
fi
CMD="aws cloudformation describe-stacks --stack-name ${SERVICE}-${STAGE} | jq -r '.Stacks[].Outputs[] | (.OutputKey + \"=\\\"\" + .OutputValue + \"\\\"\")'"
CMD="${CMD} ${OUTPUT}"
eval $CMD
