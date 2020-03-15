function postToEBS (lctreSn) {
  const atnlcNo = $('#atnlcNo').val()
  const lctreSeCode = $('#lctreSeCode').val()
  const stepSn = $('#stepSn').val()
  const cntntsTyCode = $('#cntntsTyCode').val()
  const revivTime = $('#revivTime').val()

  const postData = {}
  postData.atnlcNo = atnlcNo
  postData.lctreSn = lctreSn
  postData.stepSn = stepSn
  postData.lctreSeCode = lctreSeCode
  postData.cntntsTyCode = cntntsTyCode
  postData.revivTime = revivTime
  postData.endButtonYn = 'Y'
  postData.lastRevivLc = revivTime

  postData.lrnTime = revivTime

  fncPost('/mypage/userlrn/lctreLrnSave.do', postData, () => {
    console.log('Success: ' + lctreSn)
  })
}

const steps = $('#mainContent > aside > nav > ul').children().length
const lctreSn = Number($('#lctreSn').val())
console.log(`atnlcNo: ${$('#atnlcNo').val()}
lctreSeCode: ${$('#lctreSeCode').val()}
stepSn: ${$('#stepSn').val()}
cntntsTyCode: ${$('#cntntsTyCode').val()}
revivTime: ${$('#revivTime').val()}
--------------------------------------
${steps} Steps
Starting LctreSn (${lctreSn})
End LctreSn (${lctreSn + (steps - 1)})`)
for (let i = lctreSn; i <= lctreSn + (steps - 1); i++) {
  console.log(`Sending Success Code to ${i}`)
  postToEBS(i)
}
