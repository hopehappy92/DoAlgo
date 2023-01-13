function checkTag(text) {
  const tagRegex = /<[^>]*>/;

  const tags = [];

  let i = 0;
  for (i = 0; i <= text.length; i += 1) {
    const exec = tagRegex.exec(text);

    if (exec) {
      const originTag = exec[0];
      const pretreatedTag = originTag
        .replace("<", "")
        .replace(">", "")
        .trim()
        .split(" ")[0];

      if (pretreatedTag.indexOf("/") === -1) {
        tags.push(pretreatedTag);
      } else {
        const clostTag = pretreatedTag.split("/")[1];
        const lastTag = tags.pop();

        if (clostTag !== lastTag) {
          return false;
        }
      }

      const tagLength = originTag.length;
      text = text.slice(exec.index + tagLength);
      i = 0;
    }
  }

  console.log(tags);

  return true;
}

const a = "<p> 1213123123 <b> 123444 </p>";
const b = "<em 123>123123 </em>";
const c = "<p> zcv <b> 123 </b>";
const d = "<p> zcv <b> 123 </b> cbxvb </p>";
const e =
  '외국환수수료지침이다음과 같이 개정될 예정이오니 업무에 참고하시고 아래의 조치사항을<p>\n이행하여 주시기 바랍니다.\n\n1. 개정사유\n -물류 비용 상승에 따른 <p>특사배달회사(DHL)의지역별 운임인상으로 인한 특사배달료 조정\n\n 2. 개정내용\n -외국환수수료지침 內 <별표 2> 특사배달료  (단위 : 원)\n<table border="0" style=""><tbody><tr><td style="">구 분\n</td><td style="">개정 전\n</td><td style="">개정 후\n</td><td style="">인상액\n</td></tr><tr><td style="background-color: transparent;">제1지역\n</td><td style="background-color: transparent;">12000\n</td><td style="background-color: transparent;">13000\n</td><td style="background-color: transparent;">1000\n</td></tr><tr><td style="background-color: transparent;">제2지역\n</td><td style="background-color: transparent;">10000\n</td><td style="background-color: transparent;">12000\n</td><td style="background-color: transparent;">2000\n</td></tr><tr><td style="background-color: transparent;">제3지역\n</td><td style="background-color: transparent;">11000\n</td><td style="background-color: transparent;">13000\n</td><td style="background-color: transparent;">2000\n</td></tr><tr><td style="background-color: transparent;">제4지역\n</td><td style="background-color: transparent;">16000\n</td><td style="background-color: transparent;">18000\n</td><td style="background-color: transparent;">2000\n</td></tr><tr><td style="background-color: transparent;">제5지역\n</td><td style="background-color: transparent;">23000\n</td><td style="background-color: transparent;">27000\n</td><td style="background-color: transparent;">4000\n</td></tr><tr><td style="background-color: transparent;">제6지역\n</td><td style="background-color: transparent;">16000\n</td><td style="background-color: transparent;">18000\n</td><td style="background-color: transparent;">2000\n</td></tr><tr><td style="background-color: transparent;">제7지역\n</td><td style="background-color: transparent;">21000\n</td><td style="background-color: transparent;">23000\n</td><td style="background-color: transparent;">2000\n</td></tr><tr><td style="background-color: transparent;">제8지역\n</td><td style="background-color: transparent;">17000\n</td><td style="background-color: transparent;">20000\n</td><td style="background-color: transparent;">3000\n</td></tr></tbody></table>\n 3. 시행 (예정)일 : 2022.4. 4(월)\n\n 4.영업점 조치사항 \n수수료 변경을 위한 대고객 사전안내를 위하여 붙임의 "수수료 변경 안내문"을 객장 내다목적 \n게시대를 활용하여 1개월간 게시하여 주시기 바랍니다.(2022. 3. 4 ~ 2022. 4. 3)\n\n 붙 임 : 1.『수수료 변경 안내문』1부.\n  2.「외국환수수료지침」(별표2)특사배달료 및 우편요율표개정전문 1부\n 3.「외국환수수료지침」(별표2)특사배달료 및 우편요율표개정대비표 1부. 끝.\n]]>외환사업부장NONO무무';

console.log(checkTag(e));
