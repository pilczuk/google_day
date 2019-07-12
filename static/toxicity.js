toxicity.load().then(model => {
  $('#loader').removeClass('active')

  $('#comment-form').submit(function () {
    const text = $('textarea', this).val()

    // The minimum prediction confidence.
    const threshold = 0.5;

    // Load the model. Users optionally pass in a threshold and an array of
    // labels to include.
    toxicity.load(threshold).then(model => {
      model.classify([text]).then(predictions => {
        // `predictions` is an array of objects, one for each prediction head,
        // that contains the raw probabilities for each input along with the
        // final prediction in `match` (either `true` or `false`).
        // If neither prediction exceeds the threshold, `match` is `null`.
        console.log(predictions);
      });
    });

    return false
  })
})
