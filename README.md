# Brokurly

- Easy and Best way to buy organic vegetables.
- Grocery e-commerce

## Check the website

[Brokurly](http://organicbrokurly.s3-website.ap-northeast-2.amazonaws.com/)

## Project duration

2021/Nov/29 - 2021/Dec/9

## Members

- Frontend :
  - Song Hyun Kim 김성현 [github link](https://github.com/Globalkmaria)
  - 홍정빈 [github link](https://github.com/tohjbin2)
  - 구유진 [github link](https://github.com/sodalite1204)
    <br/><br/>
- Backend :
  - 성종호 [github link](https://github.com/SeongJongHo)
  - 박세용 [github link](https://github.com/se-yong)
  - 제갈창민 [github link](https://github.com/Ted0527)
    <br/><br/>
- [FrontEnd github link](https://github.com/wecode-bootcamp-korea/27-1st-Brokurly-frontend.git)
- [Backend github link](https://github.com/wecode-bootcamp-korea/27-1st-Brokurly-backend.git)

### Demo Video (Click the image to see the whole video)

[![Brokurly](https://images.velog.io/images/sodalite1204/post/c8929616-0e2f-4f1d-81ce-9efd896c4a03/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-12-13%2010.03.14.png)](https://youtu.be/th74v_hDXtM)

## Stacks

- Front-End: React.js, Sass, React Router
- Back-End: Python, Django web framework, MySQL
- Common(release): AWS

## Communication tools

- Git, Github, Slack, Trello, Notion

## What we created

- Navbar
- Sign In
- Sign Up
- Product List Page (Main page)
- Product Detail Page
- Cart page
- Purchase History Page
- Footer

### My part

#### Product List Page

- Because Product List was the main page, I couldn't use react-router. Instead, I used different queries to handle different categories.
- 3 elements (Menu, Category, Sorting) were used to show products and get data.
- When user click Menu(the option in the Navbar) Category and Sorting is initialized, and show Category: All, Sort: newest.
- 상세 리스트가 메인 화면이기 때문에 params로 카테고리별 다른 화면을 보여주는 것이 아니라 query로 해당 부분을 관리
- 대분류, 중분류, 정렬 3가지 요소를 데이터를 가져오기 위해 사용
- 대분류가 클릭 됐을 때 중분류 -> 전체 보기, 정렬 -> 신상순으로 정렬되어 일관성이 있도록 관리
  <br/>

![show list of items](https://github.com/Globalkmaria/Brokurly/blob/main/public/images/showList.gif?raw=true)

- When Cart Button(Which is above the Product image) is clicked, Modal that helps user add product right away pops up.
- When user add product to the cart, message('Product is added to the cart') will show over the product image.
- 카트 버튼을 눌러 modal창으로 상품을 주문할 수 있게 함
- 상품 카트에 추가 시 상품 이미지 위에 '장바구니에 담겼습니다' 메세지 애니메이션 효과
  <br/>

![add to Cart](https://github.com/Globalkmaria/Brokurly/blob/main/public/images/addToCart.gif?raw=true)

- When user click the product, user can move to the Product Detail Page.
- 상품 부분 클릭 시 상세 페이지로 이동
  <br/>

![to detail page](https://github.com/Globalkmaria/Brokurly/blob/main/public/images/toItem.gif?raw=true)

#### Cart page

- When you aren't signed in, the order button is blocked.
- 로그인하지 않았을 때 fetch를 하지 않게 하여 No Token 에러 없앰

- 2 ways to change product quantity
  - When user use the button, user can change by 1 unit.
  - When user change the quantity text, user can change to any number.
- 수량 입력
  - 버튼으로 1단위 변화, 수량 직접 입력 가능
  - 0, 빈칸 -> 수량을 1이 되도록 만듦
    <br/>

![change input in Cart page](https://github.com/Globalkmaria/Brokurly/blob/main/public/images/changeCartInput.gif?raw=true)

- Check or Delete part or all of the products in the carting list.
- 전체, 부분 선택 또는 삭제 가능
  <br/>

![check and delete products](https://github.com/Globalkmaria/Brokurly/blob/main/public/images/checkAndDelete.gif?raw=true)

- Total amount shows only the ones that are checked.
- 총금액은 체크된 상품만 계산
  <br/>

![get total price](https://github.com/Globalkmaria/Brokurly/blob/main/public/images/total.gif?raw=true)

- Cart list products are sorted into two parts(how it is packed).
- Open or Close the list.

- 냉장, 상온 2개로 상품을 분류하여 소비자가 보기 편리하게 구성
- 분류별 토글 버튼을 만들어 해당 리스트 펼치거나 접을 수 있게 함
  <br/>

![toggle items](https://github.com/Globalkmaria/Brokurly/blob/main/public/images/itemToggle.gif?raw=true)

#### Purchase History Page

- Show orders in recently ordered orders.
- Cancel the order.

- 최신순으로 주문서 보여줌
- 주문서별 주문 취소 기능
  <br/>

![purchase and cancel purchase](https://github.com/Globalkmaria/Brokurly/blob/main/public/images/purchase.gif?raw=true)

## ERD

![](https://images.velog.io/images/sodalite1204/post/73e9d194-bb45-40df-bf7c-09ae5fc2baa2/erd.png)

### Reference

- 이 프로젝트는 마켓컬리 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
