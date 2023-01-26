export default function kakaoShare() {
  window.Kakao.Share.sendDefault({
    objectType: "feed",
    content: {
      title: "나의 결과는?",
      description: "나는 어느 시대에 잘 어울릴까?",
      imageUrl:
        "https://velog.velcdn.com/images/j_hana01/post/27a73f4b-96b3-4086-9643-82967e73a79d/image.png",
      link: {
        mobileWebUrl: "https://developers.kakao.com",
        webUrl: "https://developers.kakao.com",
      },
    },
    itemContent: {
      profileText: "셀럽파이브",
      profileImageUrl:
        "https://velog.velcdn.com/images/j_hana01/post/4d3a2661-2a16-46a0-8526-c621199d1f26/image.JPG",
      titleImageUrl:
        "https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
    },
    buttons: [
      {
        title: "자세히 알아보기",
        link: {
          mobileWebUrl: "http://www.naver.com",
          webUrl: "http://www.naver.com",
        },
      },
    ],
  });
}
