# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### About Project
- Sử dụng công nghệ: Reactjs,JS,HTML,SCSS,MockAPI, Reponsive.
- Mô tả: 
+ Website bán hàng sử dụng MockAPI để fake dữ liệu render ra giao diện người dùng. Có 2 trang sản phẩm.
+ Click vào mặt hàng sẽ ra chi tiết sản phẩm. 
+ Chức năng thêm vào giỏ hàng lưu vào localStorage, thêm xóa các sản phẩm ở trang giỏ hàng.
+ Chức năng checkOut tính toán giá mặt hàng sản phẩm,Form checkOut nhưng chưa validate, lựa chọn các phương thức thanh toán,vận chuyển.
+ MockAPI chứa các dữ liệu
- Kĩ năng:
+ Sử dụng các hook Component cơ bản: useState,useEffect,useRef,useContext...
+ Sử dụng ReactRouter để chuyển đổi giữa các trang với nhau.
- Kiến trúc tạo file: Trong thư mục src có 3 thư mục chính là assets,component và page.
+ Thư mục asset chứa các hình ảnh mà project sử dụng. 
+ Thư mục Component chứa các component con và các component sử dụng lại nhiều lần.
> Component CartItem: có nhiệm vụ render ra các sản phẩm đã thêm vào giỏ hàng và có các nút xóa, thêm số lượng, tự động tính toán giá các sản phẩm.
> Component Footer: có nhiệm vụ render giao diện phần cuối trang web
> Component Heading: Có nhiệm vụ render ra phần đầu của trang Home.
> Thư mục Infocheckout: gồm các Component OrderSummary,PaymentMethod,PersonalDetails,ShippingDetails,ShippingMethod là các component render ra phần trang checkOut
> Component Navbar: có nhiệm vụ render ra thanh công cụ search(khi bấm vào sẽ có hiệu ứng trượt thanh tìm kiếm xuống), cài đặt, các trang lớn.
> Component ProductItem: có nhiệm vụ render ra các thông tin sản phẩm ở phần thân của trang Home như là tên, giá,mô tả qua....
+ Thư mục GlobalStyles: chứa các thuộc tính css mang tính toàn cục
+ Thư mục GlobalVariable: chứa các biến toàn cục để di chuyển giữa các component với nhau. Cụ thể là biến sản phẩm được chọn lưu vào localStorage và phí vận chuyển.
+ Thư mục Pages chứa các component lớn là các trang chính của project gồm:
> About:
> Cart: Sử dụng các Component Heading, CartItems
> checkOut: sử dụng các Component Heading và InfoCheckOut
> Home: sử dụng  Component ProductItem
> News:
> OrderSuccess: phần trang thông báo thành công sau khi order xong các mặt hàng lựa chọn
> Product: Trang hiển thị thông tin chi tiết sản phẩm khi người dùng click vào ảnh sản phẩm gòm có (tên, địa chỉ, số sao, số giờ mở cửa...)
- Các kiến thức JavaScript đã học:
+ Các khái niệm về Hàm, chuỗi, số, object.
+ if..else, toán tử 3 ngôi.
+ Vòng lặp: for...in, for...of,do...while
+ Làm việc với mảng: các phương thức map(),reduce(),every(),filter().
+ Callback,DOM.
+ JSON,fetch, làm việc với Postman.
+ ECMAScript 6+ : từ khóa let,const,var,toán tử spread,rest
+ JS nâng cao: Scope, Closure, Hosting.
