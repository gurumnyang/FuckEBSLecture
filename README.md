# Fuck EBS Lecture
## Script By Sangoon_Is_Noob#1683
## 이 스크립트는 브라우저 콘솔 (개발자 도구) 에서 사용하는 스크립트입니다.

### 사용 전 스크린샷
![사용 전](https://cdn.discordapp.com/attachments/688667754009591917/688789954779676832/unknown.png)

### 사용 후 스크린샷
![사용 후](https://cdn.discordapp.com/attachments/688667754009591917/688789600990265416/unknown.png)


# 사용 방법

## 1. EBS 강의 보기 페이지에 접속한다
![강의 보기 페이지 스크린샷](https://cdn.discordapp.com/attachments/688667754009591917/688791099833319433/unknown.png)

## 2. EBS 강의 보기 페이지에서 F12 또는 CTRL + SHIFT + I 를 누른다
![강의 보기 페이지 개발자도구](https://cdn.discordapp.com/attachments/688667754009591917/688791809853620245/unknown.png)
### 2-1. 개발자 도구 탭에서 Console 을 클릭한다.
![콘솔 탭 스크린샷](https://cdn.discordapp.com/attachments/688667754009591917/688793495623958557/unknown.png)
### 2-2. 콘솔창에 아래의 코드를 복사 붙여넣기 한다 (CTRL C => CTRL V)
![복붙 스크린샷](https://cdn.discordapp.com/attachments/688667754009591917/688792148258455553/unknown.png)
#### 복사 붙여넣기 할 코드
```js
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
```
### 2-3. 엔터키를 누른후 오류가 난다면 Issue 에 오류 내용을 첨부해주고, 완료될때 까지 기다린다 (Success 글씨가 더이상 뜨지 않을 때 까지)
![콘솔스샷](https://cdn.discordapp.com/attachments/688667754009591917/688792449019412542/unknown.png)
### 2-4. 완료되었다면 새로고침을 한다.
![새로고침후 사진](https://cdn.discordapp.com/attachments/688667754009591917/688792685892730885/unknown.png)
![완료사진](https://cdn.discordapp.com/attachments/688667754009591917/688792750157856802/unknown.png)

## Thanks For Using :D
