import React from "react";

function Footer() {
  return (
    <footer class="bg-white dark:bg-gray-900">
      <div class="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
        <p class="text-md text-gray-600 dark:text-gray-300">
          Bu sitenin kodları indirilip kullanılabilir.{" "}
          {new Date().getFullYear()}
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 fill-current inline mx-3 -mt-1"
            viewBox="0 0 32 32"
          >
            <title>point-right</title>
            <path d="M13 30h5c1.654 0 3-1.346 3-3 0-0.535-0.14-1.037-0.387-1.472 0.833-0.534 1.387-1.467 1.387-2.528 0-0.768-0.29-1.469-0.766-2 0.476-0.531 0.766-1.232 0.766-2 0-0.35-0.060-0.687-0.171-1h7.171c1.654 0 3-1.346 3-3s-1.346-3-3-3h-12.334l2.932-5.501c0.262-0.454 0.401-0.973 0.401-1.499 0-1.654-1.346-3-3-3-0.824 0-1.592 0.327-2.163 0.922-0.007 0.008-0.015 0.015-0.022 0.023l-6.815 7.474v-1.419c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v20c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-1.382l4.553 2.276c0.139 0.069 0.292 0.106 0.447 0.106zM5 28c-0.552 0-1-0.448-1-1s0.448-1 1-1 1 0.448 1 1-0.448 1-1 1zM13.236 28l-5.236-2.618v-11.995l8.287-9.088c0.19-0.193 0.443-0.299 0.713-0.299 0.551 0 1 0.449 1 1 0 0.171-0.041 0.332-0.122 0.479-0.010 0.017-0.020 0.033-0.029 0.051l-3.732 7c-0.165 0.31-0.156 0.684 0.025 0.985s0.506 0.485 0.857 0.485h14c0.551 0 1 0.449 1 1s-0.449 1-1 1h-10c-0.552 0-1 0.448-1 1s0.448 1 1 1c0.551 0 1 0.449 1 1s-0.449 1-1 1c-0.552 0-1 0.448-1 1s0.448 1 1 1c0.551 0 1 0.449 1 1s-0.449 1-1 1h-1c-0.552 0-1 0.448-1 1s0.448 1 1 1c0.551 0 1 0.449 1 1s-0.449 1-1 1h-4.764z"></path>
          </svg>
          <a href="#" className="underline underline-offset-2">Github</a>
        </p>

        <div class="flex -mx-2">
          <a href="#" class="social" aria-label="Github">
            <svg
              class="w-5 h-5 fill-current"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z" />
            </svg>
          </a>

          <a href="#" class="social" aria-label="Twitter">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 fill-current"
              viewBox="0 0 32 32"
            >
              <title>twitter</title>
              <path d="M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z"></path>
            </svg>
          </a>

          <a href="#" class="social" aria-label="Facebook">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 fill-current"
              viewBox="0 0 32 32"
            >
              <title>facebook2</title>
              <path d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h13v-14h-4v-4h4v-2c0-3.306 2.694-6 6-6h4v4h-4c-1.1 0-2 0.9-2 2v2h6l-1 4h-5v14h9c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3z"></path>
            </svg>
          </a>
          <a href="#" class="social" aria-label="LinkedIn">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 fill-current"
              viewBox="0 0 32 32"
            >
              <title>linkedin</title>
              <path d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3zM12 26h-4v-14h4v14zM10 10c-1.106 0-2-0.894-2-2s0.894-2 2-2c1.106 0 2 0.894 2 2s-0.894 2-2 2zM26 26h-4v-8c0-1.106-0.894-2-2-2s-2 0.894-2 2v8h-4v-14h4v2.481c0.825-1.131 2.087-2.481 3.5-2.481 2.488 0 4.5 2.238 4.5 5v9z"></path>
            </svg>
          </a>
          <a href="#" class="social" aria-label="LinkedIn">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 fill-current"
              viewBox="0 0 32 32"
            >
              <title>instagram</title>
              <path d="M16 2.881c4.275 0 4.781 0.019 6.462 0.094 1.563 0.069 2.406 0.331 2.969 0.55 0.744 0.288 1.281 0.638 1.837 1.194 0.563 0.563 0.906 1.094 1.2 1.838 0.219 0.563 0.481 1.412 0.55 2.969 0.075 1.688 0.094 2.194 0.094 6.463s-0.019 4.781-0.094 6.463c-0.069 1.563-0.331 2.406-0.55 2.969-0.288 0.744-0.637 1.281-1.194 1.837-0.563 0.563-1.094 0.906-1.837 1.2-0.563 0.219-1.413 0.481-2.969 0.55-1.688 0.075-2.194 0.094-6.463 0.094s-4.781-0.019-6.463-0.094c-1.563-0.069-2.406-0.331-2.969-0.55-0.744-0.288-1.281-0.637-1.838-1.194-0.563-0.563-0.906-1.094-1.2-1.837-0.219-0.563-0.481-1.413-0.55-2.969-0.075-1.688-0.094-2.194-0.094-6.463s0.019-4.781 0.094-6.463c0.069-1.563 0.331-2.406 0.55-2.969 0.288-0.744 0.638-1.281 1.194-1.838 0.563-0.563 1.094-0.906 1.838-1.2 0.563-0.219 1.412-0.481 2.969-0.55 1.681-0.075 2.188-0.094 6.463-0.094zM16 0c-4.344 0-4.887 0.019-6.594 0.094-1.7 0.075-2.869 0.35-3.881 0.744-1.056 0.412-1.95 0.956-2.837 1.85-0.894 0.888-1.438 1.781-1.85 2.831-0.394 1.019-0.669 2.181-0.744 3.881-0.075 1.713-0.094 2.256-0.094 6.6s0.019 4.887 0.094 6.594c0.075 1.7 0.35 2.869 0.744 3.881 0.413 1.056 0.956 1.95 1.85 2.837 0.887 0.887 1.781 1.438 2.831 1.844 1.019 0.394 2.181 0.669 3.881 0.744 1.706 0.075 2.25 0.094 6.594 0.094s4.888-0.019 6.594-0.094c1.7-0.075 2.869-0.35 3.881-0.744 1.050-0.406 1.944-0.956 2.831-1.844s1.438-1.781 1.844-2.831c0.394-1.019 0.669-2.181 0.744-3.881 0.075-1.706 0.094-2.25 0.094-6.594s-0.019-4.887-0.094-6.594c-0.075-1.7-0.35-2.869-0.744-3.881-0.394-1.063-0.938-1.956-1.831-2.844-0.887-0.887-1.781-1.438-2.831-1.844-1.019-0.394-2.181-0.669-3.881-0.744-1.712-0.081-2.256-0.1-6.6-0.1v0z"></path>
              <path d="M16 7.781c-4.537 0-8.219 3.681-8.219 8.219s3.681 8.219 8.219 8.219 8.219-3.681 8.219-8.219c0-4.537-3.681-8.219-8.219-8.219zM16 21.331c-2.944 0-5.331-2.387-5.331-5.331s2.387-5.331 5.331-5.331c2.944 0 5.331 2.387 5.331 5.331s-2.387 5.331-5.331 5.331z"></path>
              <path d="M26.462 7.456c0 1.060-0.859 1.919-1.919 1.919s-1.919-0.859-1.919-1.919c0-1.060 0.859-1.919 1.919-1.919s1.919 0.859 1.919 1.919z"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
