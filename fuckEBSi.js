function postToEBS (_, lctreSn) {
  const lessonId = lctreSn.id
  const sbjtapplyId = window.frmStudyPlayer.sbjtapplyId.value
  const sbjtId = window.frmStudyPlayer.sbjtId.value

  // 학습 중용 데이터
  let value = { lessonId, sbjtapplyId, sbjtId, clntGbnCd: "C", second: "1", lecGbn: "V500", atndGbnCd: "S", ltStdTm: "1", status: "0" }

  // 학습중으로 변경
  jQuery.ajax({
    type: 'POST',
    async: false,
    url: '/ebs/lms/lmsHist/saveLmsLessonHistDtlAjax.ebs',
    data: value,
    cache: false,
    success: function() {
      console.log('Success: ' + lessonId)
    }
  })

  // 학습 완료용 데이터
  value = { lessonId, sbjtapplyId, eventType: "N" }

  // 학습 완료로 변경
  jQuery.ajax({
    type: 'POST',
    async: false,
    url: '/ebs/lms/lmsHist/saveLmsLessonHistCompletedAjax.ebs',
    data: value,
    cache: false,
    success: function() {
      console.log('Success: ' + lessonId)
    }
  })
}

jQuery('tbody.lessonList>tr').each(postToEBS)
