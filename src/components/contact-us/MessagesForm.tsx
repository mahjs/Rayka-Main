import React, { FC } from "react";
import Form from "./Form";

const MessagesForm: FC = () => {
  return (
    <div className="mt-10 grid select-none place-items-center p-[1em] md:p-[2.5em] lg:grid-cols-2 lg:p-[5em]">
      <div className="h-full w-full">
        <p className="title text-center text-semiBlack md:text-right">
          دوست داریم صدای <span className="text-primary">شما</span> را بشنویم !
        </p>
        <p className="subtitle mr-1 mt-3 hidden text-semiBlack md:flex">
          جهت ارتباط با تیم رایکا فرم زیر را تکمیل کنید. <br /> تیم پشتیبانی در
          اسروع وقت با شما تماس خواهند گرفت !
        </p>
        <p className="subtitle mr-1 mt-3 text-center text-semiBlack md:hidden">
          جهت ارتباط با تیم رایکا فرم زیر را تکمیل کنید. <br /> تیم پشتیبانی در
          اسروع وقت با شما تماس خواهند گرفت !
        </p>
        <div className="mt-[3em] hidden items-center lg:flex ">
          <p className="subtitle ml-3 text-semiBlack">
            سوالی دارید؟ به ما پیام دهید
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.3rem"
            height="1.3rem"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M13.2991 0.00148455C14.1791 -0.0018941 15.0591 0.00695498 15.9388 0.028029L16.1728 0.0364749C16.4429 0.0461274 16.7094 0.058193 17.0313 0.0726718C18.3144 0.133 19.1899 0.335703 19.958 0.633724C20.7539 0.940191 21.4244 1.35525 22.0948 2.0261C22.7079 2.6289 23.1823 3.35808 23.4852 4.16292C23.7831 4.9315 23.9856 5.80867 24.0459 7.09245C24.0604 7.4134 24.0725 7.68126 24.0821 7.95153L24.0894 8.1856C24.1108 9.06542 24.12 9.94549 24.1171 10.8256L24.1183 11.7257V13.3063C24.1213 14.1867 24.112 15.0672 24.0906 15.9474L24.0833 16.1815C24.0737 16.4518 24.0616 16.7184 24.0471 17.0406C23.9869 18.3243 23.7819 19.2003 23.4852 19.9689C23.1833 20.7746 22.7087 21.5044 22.0948 22.1069C21.4918 22.7202 20.7627 23.1949 19.958 23.4981C19.1899 23.7961 18.3144 23.9988 17.0313 24.0591C16.7094 24.0736 16.4429 24.0857 16.1728 24.0953L15.9388 24.1026C15.0591 24.124 14.1791 24.1333 13.2991 24.1303L12.3996 24.1315H10.8211C9.94108 24.1345 9.0611 24.1253 8.18139 24.1038L7.94744 24.0965C7.66118 24.0862 7.37498 24.0741 7.08886 24.0603C5.8058 24 4.93033 23.7949 4.16098 23.4981C3.35628 23.1957 2.62739 22.7208 2.02537 22.1069C1.41163 21.504 0.936729 20.7743 0.633783 19.9689C0.33593 19.2003 0.133343 18.3243 0.0730485 17.0406C0.0596185 16.7543 0.0475596 16.4679 0.0368722 16.1815L0.0308429 15.9474C0.0086108 15.0672 -0.00143927 14.1867 0.000695794 13.3063V10.8256C-0.00266978 9.94549 0.00617428 9.06542 0.0272252 8.1856L0.0356664 7.95153C0.0453134 7.68126 0.0573722 7.4134 0.0718427 7.09245C0.132137 5.80746 0.334724 4.93271 0.632577 4.16292C0.935702 3.35768 1.41153 2.62871 2.02657 2.0273C2.62818 1.41286 3.35661 0.937262 4.16098 0.633724C4.93033 0.335703 5.80459 0.133 7.08886 0.0726718L7.94744 0.0364749L8.18139 0.0304423C9.06069 0.0082087 9.94026 -0.00184707 10.8198 0.000278074L13.2991 0.00148455ZM12.0595 6.0343C11.2606 6.02299 10.4674 6.17067 9.72609 6.46874C8.98474 6.76682 8.30999 7.20934 7.74105 7.77061C7.17212 8.33187 6.72034 9.00068 6.41198 9.73816C6.10362 10.4756 5.94483 11.2671 5.94483 12.0665C5.94483 12.8659 6.10362 13.6574 6.41198 14.3949C6.72034 15.1323 7.17212 15.8011 7.74105 16.3624C8.30999 16.9237 8.98474 17.3662 9.72609 17.6643C10.4674 17.9624 11.2606 18.11 12.0595 18.0987C13.6586 18.0987 15.1922 17.4631 16.3229 16.3318C17.4537 15.2004 18.0889 13.6659 18.0889 12.0659C18.0889 10.4659 17.4537 8.93143 16.3229 7.80006C15.1922 6.66869 13.6586 6.0343 12.0595 6.0343ZM12.0595 8.44742C12.54 8.43857 13.0175 8.52561 13.4641 8.70347C13.9107 8.88133 14.3173 9.14644 14.6603 9.48331C15.0033 9.82019 15.2758 10.2221 15.4618 10.6655C15.6478 11.1089 15.7437 11.585 15.7438 12.0659C15.7439 12.5468 15.6482 13.0229 15.4623 13.4664C15.2764 13.9099 15.0041 14.3119 14.6612 14.6488C14.3183 14.9858 13.9117 15.2511 13.4652 15.4291C13.0187 15.6071 12.5413 15.6943 12.0607 15.6856C11.1012 15.6856 10.1811 15.3042 9.50264 14.6254C8.8242 13.9466 8.44306 13.0259 8.44306 12.0659C8.44306 11.1059 8.8242 10.1852 9.50264 9.5064C10.1811 8.82758 11.1012 8.44622 12.0607 8.44622L12.0595 8.44742ZM18.3904 4.22445C18.0013 4.24003 17.6334 4.40562 17.3637 4.68653C17.0939 4.96745 16.9433 5.34189 16.9433 5.73145C16.9433 6.12101 17.0939 6.49546 17.3637 6.77637C17.6334 7.05728 18.0013 7.22287 18.3904 7.23845C18.7901 7.23845 19.1735 7.07955 19.4562 6.79671C19.7389 6.51386 19.8977 6.13025 19.8977 5.73025C19.8977 5.33024 19.7389 4.94663 19.4562 4.66378C19.1735 4.38094 18.7901 4.22204 18.3904 4.22204V4.22445Z"
              fill="#111111"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.3rem"
            height="1.3rem"
            viewBox="0 0 26 22"
            fill="none"
            className="mx-3"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M23.3068 0.150509C23.6265 0.0172413 23.9764 -0.0287218 24.3201 0.0174031C24.6638 0.0635279 24.9887 0.200055 25.2611 0.412773C25.5334 0.625492 25.7432 0.906625 25.8687 1.22691C25.9941 1.5472 26.0306 1.89493 25.9743 2.23391L23.0404 19.8608C22.7558 21.5611 20.8723 22.5362 19.2979 21.6893C17.981 20.9807 16.0251 19.889 14.2658 18.75C13.3861 18.1798 10.6916 16.3539 11.0227 15.0547C11.3073 13.9438 15.8349 9.76928 18.4222 7.28739C19.4377 6.31231 18.9745 5.74982 17.7754 6.64673C14.7962 8.87364 10.0163 12.2601 8.43549 13.2134C7.04098 14.054 6.31397 14.1975 5.44466 14.054C3.8587 13.7926 2.38786 13.3877 1.18739 12.8944C-0.434798 12.2281 -0.355888 10.0191 1.1861 9.37592L23.3068 0.150509Z"
              fill="#111111"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.3rem"
            height="1.3rem"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M4.89907 0C2.20496 0 0 2.20491 0 4.89907V20.1017C0 22.7958 2.20491 25 4.89907 25H20.1017C22.7959 25 25 22.7959 25 20.1017V4.89907C25 2.20496 22.7959 0 20.1017 0H4.89907ZM6.13125 4.1255C7.42302 4.1255 8.21869 4.97352 8.24325 6.08824C8.24325 7.17834 7.42297 8.05019 6.10627 8.05019H6.08203C4.81485 8.05019 3.99582 7.17839 3.99582 6.08824C3.99582 4.97355 4.83964 4.1255 6.13123 4.1255H6.13125ZM17.2631 9.33552C17.2631 9.33552 17.2631 9.33553 17.2631 9.33553C19.7474 9.33554 21.6098 10.9593 21.6098 14.4487V19.075C21.6098 20.1176 20.7646 20.9627 19.722 20.9627C18.6795 20.9627 17.8343 20.1176 17.8343 19.075V14.8854C17.8343 13.3582 17.2879 12.3163 15.9216 12.3163C14.8785 12.3163 14.2568 13.0186 13.9838 13.697C13.8841 13.9397 13.8596 14.2787 13.8596 14.6182V19.0795C13.8596 20.1196 13.0164 20.9627 11.9764 20.9627C10.9328 20.9627 10.0881 20.1172 10.0921 19.0736C10.1001 16.9933 10.1104 13.6614 10.1043 11.531C10.1013 10.4788 10.9639 9.60195 12.0161 9.60195H13.4932C13.696 9.60195 13.8604 9.76634 13.8604 9.96913C13.8604 10.3349 14.3782 10.5022 14.6504 10.258C15.2113 9.75493 16.0266 9.33551 17.2631 9.3355C17.2631 9.3355 17.2631 9.33551 17.2631 9.33552ZM4.21852 11.4905C4.21852 10.4479 5.06369 9.60277 6.10626 9.60277C7.14882 9.60277 7.99399 10.4479 7.99399 11.4905V19.0751C7.99399 20.1176 7.14882 20.9628 6.10626 20.9628C5.06369 20.9628 4.21852 20.1176 4.21852 19.0751V11.4905Z"
              fill="#FEA918"
            />
          </svg>
        </div>
      </div>
      <Form />
    </div>
  );
};

export default MessagesForm;