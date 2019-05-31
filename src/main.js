// Seems GCF will look for an index.js file when the deploy command is run

exports.ipValidator = (req, res) => {
  res.status(200).send('I got the request')
}

// deploy via gcloud
// gcloud  functions deploy loValidator --stage-bucket <need the bucket> --runtime=nodejs10 --trigger-http