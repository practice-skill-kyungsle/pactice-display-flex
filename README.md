# FlexBox Page Clone Project

CSS중 Flexbox를 응용해보는 레퍼지토리입니다.

FlexBox를 통해서 아래와 같이 만들어보세요!

출처 : <a href="https://www.youtube.com/watch?v=X91jsJyZofw">Ellie's coding</a>

<br>

![무제2](https://user-images.githubusercontent.com/79993356/115570866-6d586c80-a2f9-11eb-835a-238f169bf255.png)

<br>

전체적인 페이지는 위와 같이 만들어져야 합니다. 페이지의 크기르 줄이다 보면 아래오 같이 태블릿 모드로 전환됩니다.

<br>

![무제](https://user-images.githubusercontent.com/79993356/115570855-6b8ea900-a2f9-11eb-8686-e6dd6874b248.png)

<br>

태블릿 크기(768px 이하)로 작아지면 태블릿 모드로 바꾸어 줍니다. 기본적으로는 위와 같은 형태이지만 우측 상단의 버튼을 누르면,

<br>

<img width="648" alt="스크린샷 2021-04-21 오후 10 03 20" src="https://user-images.githubusercontent.com/79993356/115558490-c28e8100-a2ed-11eb-920c-9c99bf4d146b.png">

<br>

이런 식으로 페이지가 보여집니다.

<br>

HTML과 CSS, Javascript를 사용해보세요!

이 아래 부터는 제가 이 페이지를 만들면서 사용했던 방법들에 대한 설명입니다. (스포주의😄)

---

✅ Media Query

<a href="https://developer.mozilla.org/ko/docs/Web/CSS/Media_Queries/Using_media_queries">참고 MDN</a>

<br>

![1](https://user-images.githubusercontent.com/79993356/115559964-21a0c580-a2ef-11eb-87fe-ba37cdd376af.png)

Media Queries를 사용하면, 데스크톱과 태블릿, 모바일 폰에 상관 없이 작동되는 웹사이트를 만들 수 있습니다.

<br>

![3](https://user-images.githubusercontent.com/79993356/115559993-26fe1000-a2ef-11eb-906f-8bd3ba3f2f51.png)

요즘에는 이런 식으로 좌우 폭 크기를 나눈다고 합니다. 절대적인 것은 아니니까 참고 정도만 합시다😁

<br>

![4](https://user-images.githubusercontent.com/79993356/115560002-282f3d00-a2ef-11eb-97d7-ecc87199c367.png)

screen의 너비가 <b>800px 이상</b>이면 컨테이너를 이렇게 만들어 주어라는 말입니다.

<br>
<br>

✅  Var CSS

![6](https://user-images.githubusercontent.com/79993356/115560008-29606a00-a2ef-11eb-88fa-ddbbb8179736.png)

CSS파일에 이렇게 설정해두면 나중에 color지정해 줄 때 변수만 불러서 간단하게 사용이 가능합니다.

<br>

![7](https://user-images.githubusercontent.com/79993356/115560009-29f90080-a2ef-11eb-98a7-c7e290ec5444.png)

이런 식으로 사용합니다!

<br>
<br>

✅  querySelector

![8](https://user-images.githubusercontent.com/79993356/115560011-29f90080-a2ef-11eb-883a-7ba99b9ed7e8.png)

자바스크립트에서는 이렇게 많이 사용했는데요 하나씩 살펴볼까요ㅎ

<br>

#### queryselector

![9](https://user-images.githubusercontent.com/79993356/115560016-2a919700-a2ef-11eb-8ab2-178009265331.png)

괄호 안에 있는 선택자와 일맥상통하는 것을 반환합니다.

<br>

#### addEventListener

![10](https://user-images.githubusercontent.com/79993356/115560017-2a919700-a2ef-11eb-80df-881743f21a51.png)

![11](https://user-images.githubusercontent.com/79993356/115560020-2b2a2d80-a2ef-11eb-9ba6-4457d38eb2a1.png)

따라서 우리가 위에서 해줬던 행위는 tool이 click 된다면, menu와 icons에 토글을 생성해주고 active로 만들어주는 것입니다.

<a href="https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener">addEventListener</a>
<a href="https://developer.mozilla.org/ko/docs/Web/Events">이벤트 참조</a>
<a href="https://developer.mozilla.org/ko/docs/Web/API/Element/classList">Classlist와 토글</a>
