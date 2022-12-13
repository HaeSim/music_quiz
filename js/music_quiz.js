const MUSIC_LIST = [
  {
    id: 1,
    title: '이효리 - 10 Minutes',
    url: 'https://www.youtube.com/watch?v=BbJ4ibqR6PQ',
  },
  {
    id: 2,
    title: `나미 - 영원한 친구`,
    url: 'https://www.youtube.com/watch?v=VPo8e3XqGsU',
  },
  {
    id: 3,
    title: `마로니에 - 칵테일 사랑`,
    url: 'https://www.youtube.com/watch?v=sp5ujZzMRZ8',
  },
  {
    id: 4,
    title: `뉴진스 - Attention `,
    url: 'https://www.youtube.com/watch?v=ma8FcJxhZnw',
  },
  {
    id: 5,
    title: '아이유 - 좋은날',
    url: 'https://www.youtube.com/watch?v=nVQPNSI9Aw8',
  },
  {
    id: 6,
    title: '윤도현 - 사랑했나봐',
    url: 'https://www.youtube.com/watch?v=4OSu1MsKaZw',
  },
  {
    id: 7,
    title: `샤이니 - 누난 너무 예뻐`,
    url: 'https://www.youtube.com/watch?v=UyEkTQ0OVXw',
  },
  {
    id: 8,
    title: `무한궤도 - 그대에게`,
    url: 'https://www.youtube.com/watch?v=5dHcVjj_Kq0',
  },
  {
    id: 9,
    title: `LE SSERAFIM(르세라핌) - ANTIFRAGILE`,
    url: 'https://www.youtube.com/watch?v=UkRfiosqsvk',
  },
  {
    id: 10,
    title: `윤하 - 비밀번호 486`,
    url: 'https://www.youtube.com/watch?v=D6aSkGrd_Z0',
  },
  {
    id: 11,
    title: `김아중 - 마리아`,
    url: 'https://www.youtube.com/watch?v=siKu0o0vAfA',
  },
  {
    id: 12,
    title: `트와이스 - CHEER UP`,
    url: 'https://www.youtube.com/watch?v=8WR76Esd_BI',
  },
  {
    id: 13,
    title: '빅뱅 - 거짓말',
    url: 'https://www.youtube.com/watch?v=Hy0W7AqDC_c',
  },
  {
    id: 14,
    title: `BE'O (비오) - Counting Stars`,
    url: 'https://www.youtube.com/watch?v=9uxYuIpvsjw',
  },
  {
    id: 15,
    title: `보아 - 아틸란티스 소녀`,
    url: 'https://www.youtube.com/watch?v=ntTRbTkw4UA',
  },
  {
    id: 16,
    title: `H.O.T - 캔디`,
    url: 'https://www.youtube.com/watch?v=GMsc7wGghy8',
  },
  {
    id: 17,
    title: `김완선 - 삐에로는 우릴 보고 웃지`,
    url: 'https://www.youtube.com/watch?v=4WBKYnjj6-A',
  },
  {
    id: 18,
    title: `2PM - 우리집`,
    url: 'https://www.youtube.com/watch?v=KIY2XkwOZBA',
  },
  {
    id: 19,
    title: '더클래식 - 마법의성',
    url: 'https://www.youtube.com/watch?v=DB-2ak5O2yc',
  },
  {
    id: 20,
    title: '(G)I-DLE (여자)아이들 - TOMBOY ',
    url: 'https://www.youtube.com/watch?v=qstBQslSP44',
  },
  {
    id: 21,
    title: 'DJDOC - DOC와춤을',
    url: 'https://www.youtube.com/watch?v=Z4R8BAF0vwo',
  },
  {
    id: 22,
    title: `브레이브걸스 - 롤린`,
    url: 'https://www.youtube.com/watch?v=YlY2euBAZfM',
  },
  {
    id: 23,
    title: `레드벨벳 - Psycho`,
    url: 'https://www.youtube.com/watch?v=ldneQsewJEc',
  },
  {
    id: 24,
    title: `지코 (ZICO) - 새삥`,
    url: 'https://www.youtube.com/watch?v=azaZt7eccnc',
  },
  {
    id: 25,
    title: `아이브(IVE) - After LIKE`,
    url: 'https://www.youtube.com/watch?v=SCMd9OITTxU',
  },
  {
    id: 26,
    title: '김건모 핑계',
    url: 'https://www.youtube.com/watch?v=P4cvqF106fI',
  },
  {
    id: 27,
    title: `김건모 - 잘못된만남`,
    url: 'https://www.youtube.com/watch?v=n2AsXQtK8aA',
  },
  {
    id: 28,
    title: `SG워너비 - 라라라`,
    url: 'https://www.youtube.com/watch?v=N7R6O7-SFVU',
  },
  {
    id: 29,
    title: `브라운아이드걸스 - Abracadabra`,
    url: 'https://www.youtube.com/watch?v=dWsWbd7xauA',
  },
  {
    id: 30,
    title: `블랙핑크 - Shut Down`,
    url: 'https://www.youtube.com/watch?v=boeFmTGtl88',
  },
  {
    id: 31,
    title: `자자 - 버스안에서`,
    url: 'https://www.youtube.com/watch?v=KhZ-_b_Sy-w',
  },
  {
    id: 32,
    title: `디바 - 왜 불러`,
    url: 'https://www.youtube.com/watch?v=vpcBQ13Tar0',
  },
  {
    id: 33,
    title: `비투비 - 그리워하다`,
    url: 'https://www.youtube.com/watch?v=-yU6ib_QQw0',
  },
  {
    id: 34,
    title: `스테이씨 - ASAP`,
    url: 'https://www.youtube.com/watch?v=XKH20-WCHpY',
  },
  {
    id: 35,
    title: `벤 - 열애중`,
    url: 'https://www.youtube.com/watch?v=PrqBlVtliqs',
  },
  {
    id: 36,
    title: `청하 - 벌써12시`,
    url: 'https://www.youtube.com/watch?v=Nnc1BIjTXpE',
  },
  {
    id: 37,
    title: '박진영 - 그녀는 예뻤다',
    url: 'https://www.youtube.com/watch?v=u_QXghQpuBo',
  },
  {
    id: 38,
    title: `케이윌 - 이러지마 제발`,
    url: 'https://www.youtube.com/watch?v=Gi229tnPkvw',
  },
  {
    id: 39,
    title: '트와이스 - OOH-AHH하게',
    url: 'https://www.youtube.com/watch?v=8BgIHJvTeCU',
  },
  {
    id: 40,
    title: `BTS - Dynamite`,
    url: 'https://www.youtube.com/watch?v=KhZ5DCd7m6s',
  },
  {
    id: 41,
    title: `aespa - Next Level`,
    url: 'https://www.youtube.com/watch?v=dly3BvtmXbA',
  },
  {
    id: 42,
    title: '노라조 - 슈퍼맨',
    url: 'https://www.youtube.com/watch?v=px5TcmU8KXU',
  },
  {
    id: 43,
    title: `나미 - 빙글빙글`,
    url: 'https://www.youtube.com/watch?v=k-RID0GSl60',
  },
  {
    id: 44,
    title: `다비치 - 8282`,
    url: 'https://www.youtube.com/watch?v=OJvNhkxtveo',
  },
  {
    id: 45,
    title: '채연 - 둘이서',
    url: 'https://www.youtube.com/watch?v=qJrFJRoto88',
  },
  {
    id: 46,
    title: 'GOD - 촛불하나',
    url: 'https://www.youtube.com/watch?v=Ob6GCjJae-8',
  },
  {
    id: 47,
    title: `SS501 - URman`,
    url: 'https://www.youtube.com/watch?v=kqk5NQmgV50',
  },
  {
    id: 48,
    title: '솔리드 - 천생연분',
    url: 'https://www.youtube.com/watch?v=M2hlTs4ngsY',
  },
  {
    id: 49,
    title: `엄정화 - 초대`,
    url: 'https://www.youtube.com/watch?v=fzu5xrpMvis',
  },
  {
    id: 50,
    title: `소녀시대 - Oh!`,
    url: 'https://www.youtube.com/watch?v=UkyVJUUmLac',
  },
  {
    id: 51,
    title: `izi - 응급실`,
    url: 'https://www.youtube.com/watch?v=E-BvyQb7mWE',
  },
  {
    id: 52,
    title: `에이트 - 심장이 없어`,
    url: 'https://www.youtube.com/watch?v=rXtc_C63Vas',
  },
  {
    id: 53,
    title: `브라운 아이즈 - 벌써 일년`,
    url: 'https://www.youtube.com/watch?v=-sVo6NWwK_o',
  },
  {
    id: 54,
    title: `스테이씨 - 색안경`,
    url: 'https://www.youtube.com/watch?v=NBgLUCVBEuo',
  },
  {
    id: 55,
    title: `거북이 - 비행기`,
    url: 'https://www.youtube.com/watch?v=C_td7PbYe-M',
  },
];

var curID;
var onLoad = 0;
var yPlayer;
var duration = 10000;
var done = false;
var timer = undefined;
var aMode = false;
var musicList = [];
var ranking = [];

for (let i in MUSIC_LIST) {
  musicList.push(MUSIC_LIST[i]);
}

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
    event.target.setVolume(70);
    event.target.seekTo(40);
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
    ranking.splice(0, ranking.length);
    $('#rank1').text('1위 : ');
    $('#rank2').text('2위 : ');
    $('#rank3').text('3위 : ');
    $('#rank4').text('4위 : ');
    $('#rank5').text('5위 : ');
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
  execute_func(id, 2000);
  aMode = false;
  $('#mode').text('퀴즈모드');
  $('#title').text('노래 맞추기');
});
$(document).on('click', '#Seq_Execute3', function () {
  let id = $(this).parent().children('#url').children().val();
  execute_func(id, 5000);
  aMode = false;
  $('#mode').text('퀴즈모드');
  $('#title').text('노래 맞추기');
});
$(document).on('click', '#Seq_Execute5', function () {
  let id = $(this).parent().children('#url').children().val();
  execute_func(id, 10000);
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
  ranking = check_rank();
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
