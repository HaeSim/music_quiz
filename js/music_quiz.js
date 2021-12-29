var curID;
var onLoad = 0;
var yPlayer;
var duration = 10000;
var done = false;
var timer = undefined;
var aMode = false;
var musicList = [];
musicList.push({
  title: '소방차 어젯밤이야기',
  url: 'https://www.youtube.com/watch?v=X2QxGwbhZlc',
});
musicList.push({
  title: '지코 아무노래',
  url: 'https://www.youtube.com/watch?v=AAOyOZ3GeZ0',
});
musicList.push({
  title: '빅뱅 거짓말',
  url: 'https://www.youtube.com/watch?v=Hy0W7AqDC_c',
});
musicList.push({
  title: '아이유 좋은날',
  url: 'https://www.youtube.com/watch?v=nVQPNSI9Aw8',
});
musicList.push({
  title: '블랙핑크 뚜두뚜두',
  url: 'https://www.youtube.com/watch?v=RMc9qFrCqno',
});
musicList.push({
  title: '코요테 순정',
  url: 'https://www.youtube.com/watch?v=ZIfCGH45wFY',
});
musicList.push({
  title: '브라운아이즈 벌써일년',
  url: 'https://www.youtube.com/watch?v=-sVo6NWwK_o',
});
musicList.push({
  title: '버즈 남자를몰라',
  url: 'https://www.youtube.com/watch?v=rgms0zs6SZc',
});
musicList.push({
  title: '채연 둘이서',
  url: 'https://www.youtube.com/watch?v=qJrFJRoto88',
});
musicList.push({
  title: '윤도현 사랑했나봐',
  url: 'https://www.youtube.com/watch?v=4OSu1MsKaZw',
});
musicList.push({
  title: '김건모 핑계',
  url: 'https://www.youtube.com/watch?v=P4cvqF106fI',
});
musicList.push({
  title: '진주 난괜찮아',
  url: 'https://www.youtube.com/watch?v=b1meYzG4lvc',
});
musicList.push({
  title: '스윗소로우 아무리생각해도난너를',
  url: 'https://www.youtube.com/watch?v=jR251U3_9B8',
});
musicList.push({
  title: '김건모 잘못된만남',
  url: 'https://www.youtube.com/watch?v=CDKBuynxXfM',
});
musicList.push({
  title: '자자 버스안에서',
  url: 'https://www.youtube.com/watch?v=R3DbYFoqGr8',
});
musicList.push({
  title: '스테이씨 ASAP',
  url: 'https://www.youtube.com/watch?v=XKH20-WCHpY',
});
musicList.push({
  title: '이정현 와',
  url: 'https://www.youtube.com/watch?v=N-QqRqISX0k',
});
musicList.push({
  title: '에스파 savage',
  url: 'https://www.youtube.com/watch?v=ToxQLPErpKI',
});
musicList.push({
  title: '비오 리무진',
  url: 'https://www.youtube.com/watch?v=3lwTql6YlSE',
});
musicList.push({
  title: '거북이 비행기',
  url: 'https://www.youtube.com/watch?v=dXQzwNb8G7g',
});

// 빈 값 체크
var isEmpty = function (value) {
  if (
    value == '' ||
    value == null ||
    value == undefined ||
    (value != null && typeof value == 'object' && !Object.keys(value).length)
  ) {
    return true;
  } else {
    return false;
  }
};

// 유튜브 비디오 id 추출
function youtube_parser(url) {
  var regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  var match = url.match(regExp);
  return match && match[7].length == 11 ? match[7] : false;
}

function loadYouTubeApi() {
  console.log('loadYouTubeApi', curID);
  var tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];

  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

function onYouTubeIframeAPIReady() {
  console.log('onYouTubeIframeAPIReady');
  yPlayer = new YT.Player('player', {
    height: '190',
    width: '220',
    videoId: curID,

    playerVars: {
      disablekb: 1,
      controls: 0,
      rel: 0,
    },

    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
      onError: onPlayerError,
    },
  });
}

function onPlayerError(event) {
  console.log('onPlayerError');
  if (event.data == 150) {
    yPlayer.stopVideo();
    onPlayerStateChange_excute();
  }
}

function onPlayerReady(event) {
  console.log('onPlayerReady');
  yPlayer.setPlaybackRate(1);
  event.target.setVolume(50);
  if (!aMode) {
    event.target.playVideo();
  } else {
    event.target.seekTo(30);
  }
}
function onPlayerStateChange(event) {
  console.log('onPlayerStateChange', event.data);
  if (event.data == YT.PlayerState.PLAYING && !done) {
    timer = setTimeout(stopVideo, duration);
    done = true;
  }
}
function stopVideo() {
  yPlayer.stopVideo();
  done = false;
}

// 리스트 생성
$('td#btn-add-row').click(function (event, url = '') {
  // id 구하기
  var list_num = 1;
  for (var i = 1; i <= 100; i++) {
    if ($('#basic tr td:nth-child(1)').hasClass(String(i)) == false) {
      list_num = i;
      break;
    }
  }
  // 추가
  $('#basic > tbody:last').append(
    '<tr><td style="cursor:pointer" title="더블클릭 시 삭제됩니다." class="' +
      list_num +
      '">' +
      '</td><td>퀴즈 ' +
      list_num +
      '</td><td id="url"><input type="text"name="tb" ' +
      'value=' +
      url +
      '></td><td id="person"><input type="text"></td>' +
      '<td id="Seq_Execute1" style="background-color:forestgreen;cursor:pointer;">재생</td>' +
      '<td id="Seq_Execute3" style="background-color:forestgreen;cursor:pointer;">재생</td>' +
      '<td id="Seq_Execute5" style="background-color:forestgreen;cursor:pointer;">재생</td>' +
      '<<td id="Seq_ExecuteA" style="background-color:blue;cursor:pointer;">재생</td><</tr>'
  );
  // 동적 테이블
  $('#basic').tableDnD();
});

// 리스트 삭제
$('#basic').on('dblclick', 'tr td:nth-child(1)', function () {
  $(this).closest('tr').remove();
});

// 리스트 모두 삭제
$(function () {
  $('#btn-empty').click(function () {
    $('#basic > tbody').empty();
    for (let i of musicList) {
      $('#btn-add-row').trigger('click', [i.url]);
    }
  });
  // 목록 초기화
  $('#btn-empty').trigger('click');
});

function find_title(url) {
  let title = '';
  for (let i of musicList) {
    if (i.url === url) {
      return i.title;
    }
  }
  return title;
}

function check_rank() {
  let ranking = [];
  let rank = new Map();
  for (let i of musicList) {
    if (i.person === undefined) continue;
    if (rank.has(i.person)) {
      rank.set(i.person, rank.get(i.person) + 1);
    } else {
      rank.set(i.person, 1);
    }
  }
  const mapSort1 = new Map([...rank.entries()].sort((a, b) => b[1] - a[1]));
  return Array.from(mapSort1.keys());
}

function execute_func(id, time) {
  if (yPlayer !== undefined) {
    stopVideo();
    clearTimeout(timer);
  }
  // 정상적인 url만 필터하기
  curID = youtube_parser(id);
  duration = time;

  if (curID.length !== 0) {
    if (isEmpty(yPlayer) == false) {
      yPlayer.stopVideo();
      yPlayer.destroy();
      yPlayer = null;
      onYouTubeIframeAPIReady();
    }
    loadYouTubeApi();
  }
}

$(document).on('click', '#Seq_Execute1', function () {
  var id = $(this).parent().children('#url').children().val();
  execute_func(id, 1500);
  aMode = false;
  $('#mode').text('퀴즈모드');
  $('#title').text('노래 맞추기');
});
$(document).on('click', '#Seq_Execute3', function () {
  let id = $(this).parent().children('#url').children().val();
  execute_func(id, 3000);
  aMode = false;
  $('#mode').text('퀴즈모드');
  $('#title').text('노래 맞추기');
});
$(document).on('click', '#Seq_Execute5', function () {
  let id = $(this).parent().children('#url').children().val();
  execute_func(id, 7000);
  aMode = false;
  $('#mode').text('퀴즈모드');
  $('#title').text('노래 맞추기');
});
$(document).on('click', '#Seq_ExecuteA', function () {
  let id = $(this).parent().children('#url').children().val();
  execute_func(id, 100000);
  let element = document.getElementById('player');
  let title = find_title(id);
  aMode = true;
  element.removeAttribute('hidden');
  element.setAttribute('display', 'block');
  $('#mode').text('정답모드');
  $('#title').text(title);
});
$(document).on('change', '#person', function () {
  //propertychange change keyup paste input
  let id = $(this).parent().children('#url').children().val();
  let name = $(this).parent().children('#person').children().val();
  for (let i of musicList) {
    if (i.url === id) {
      Object.assign(i, { person: name });
    }
  }
  const ranking = check_rank();
  $('#rank1').text('1위 : ' + ranking[0]);
  $('#rank2').text('2위 : ' + (ranking[1] ? ranking[1] : ''));
  $('#rank3').text('3위 : ' + (ranking[2] ? ranking[2] : ''));
  $('#rank4').text('4위 : ' + (ranking[3] ? ranking[3] : ''));
  $('#rank5').text('5위 : ' + (ranking[4] ? ranking[4] : ''));
});

$('#vol_up').click(function () {
  if (isEmpty(yPlayer) == false) {
    var cur_vol = yPlayer.getVolume();
    if (cur_vol < 100) yPlayer.setVolume(cur_vol + 10);
  }
});

$('#vol_down').click(function () {
  if (isEmpty(yPlayer) == false) {
    var cur_vol = yPlayer.getVolume();
    if (cur_vol > 0) yPlayer.setVolume(cur_vol - 10);
  }
});

$('#force').click(function () {
  stopVideo();
  clearTimeout(timer);
});

$('#mode').click(function () {
  let element = document.getElementById('player');
  let hidden = element.getAttribute('hidden');

  if (aMode) {
    element.setAttribute('hidden', 'hidden');
    element.setAttribute('display', 'none');
    $('#mode').text('퀴즈모드');
    aMode = false;
  } else {
    element.removeAttribute('hidden');
    element.setAttribute('display', 'block');
    console.log($('#mode'));
    $('#mode').text('정답모드');
    aMode = true;
  }
});
