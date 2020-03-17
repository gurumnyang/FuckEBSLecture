function getToEBS (lctreSn) {
  // by @pmh-only
  var saveUrl = '/user/lecture/status/save'
  if (IS_SDL) saveUrl = '/user/lecture/status/sdlSave'
  
  const param =
    'courseId=' + courseID +
    '&stepId=' + stepID +
    '&lectureId=' + lctreSn +
    '&enrollNo=' + enrollNO +
    '&encodingTypeCode=' + encType +
    '&lastStudyTime=' + 99999 +
    '&lastStudyLocation=' + 99999 +
    '&partAccumulateStudyTime=' + 0

  console.log(`Sending Success Code to ${lctreSn}`)
  makeRequest(saveUrl, param)
}

const arr = []
$('.titlez').each((_, e) => arr.push(eval(e.onclick.toString().split(',')[2])))
arr.forEach(getToEBS)

