chrome.storage.local.get("extensionIsActive", (data) => {
  if (data.extensionIsActive) {
    const customCSS = `
      :root {
        --black-color: #000000;
        --grey-color: #0e0e0e;
        --purple-color: #a435f0;
        --hover-color: #222222;
        --border-color: #303030;
      }

      /* BLACK */
      header, div.footer-section, .link-bar-module--categories--iqRvl, input, textarea, form,
      [data-testid="popover-render-content"] > div > div, select, option, .alert-banner_alert-banner__lcC4_,
      [toggle-id="filter-button"], [data-purpose="learning-reminder-banner"], .alert-banner-module--alert-banner--38ZcQ,
      .my-courses__app, .top-container.dark-background, .dark-background, [data-client-side-render-only="CSR: purchase_section"],
      [data-client-side-render-only="CSR: ub_advertisement"], .ud-accordion-panel-toggler,
      .edit-profile-form--social-url-prefix--xfcxX.text-input-with-addons--addon--wB52-.edit-profile-form--social-url-prefix--xfcxX,
      span.file-uploader-module--fake-input--YBzeo, label.app--payment-setting--checkbox--dkNA2.ud-toggle-input-container.ud-text-sm,
      .lecture-bookmark-v2--content-container--hoogx, .app--row-content--wQEj-, .sidebar--sidebar-header--Ohywj,
      .layout--progress-bar--631bd, .ud-btn-icon-small, a.ud-btn.ud-btn-medium.ud-btn-ghost.ud-heading-sm.link-bar-module--nav-button--pzzmv,
      ul.ud-unstyled-list.link-bar-module--subcategories--S53nt, .wide-hero-banner-slide-module--content-box--wPFeP,
      .modal-language-selector-module--modal--58pzd.ud-modal.modal-module--dialog--RY4TX.modal-module--default-size--NPjkt,
      .main-route--left--XxVOp, .thread-list--thread-list-container--Gc-a9 > div, .message-list--messages--Tr3-K,
      span.playback-rate--trigger-text--l7hqr, .ud-modal.modal-module--dialog--RY4TX.modal-module--default-size--NPjkt,
      .transcript--autoscroll-wrapper--3ac1w, form.ud-search-form-autocomplete-input-group.ud-search-form-autocomplete-input-group-reversed ul, .ud-tabs-nav-buttons.tabs-module--tabs-nav-buttons--R48bp {
        background: var(--black-color) !important;
      }

      /* GREY */
      main, [data-testid="browse-nav-list"], .ud-header-menu > div, .panel-menu-module--footer--mjYSO, [role="tabpanel"],
      .ud-container.user-manage-classic.ud-app-loader.ud-app-loaded, .ud-main-content, .ud-main-content form,
      .popover-module--popover--HrSFz.popover-module--popover-bottom--1ghkR, .ProseMirror.rt-scaffolding, .rt-menu-bar,
      main form, .lecture-bookmark-v2--content-container--hoogx, .text-viewer--scroll-container--nJpSq, footer,
      .app--row-content--wQEj-, li.curriculum-item-link--curriculum-item--OVP5S, .layout--container--n8hk-,
      .layout--end-alert--E6j9D, [data-purpose="context-menu-options"], .popover-module--popover-bottom-arrow--QQttx,
      .dropdown-module--menu---dCM1.dropdown-module--dropdown-menu--7Qc2I, .other-options-button-module--other-options-button--ZXQ1m.other-options-button-module--other-options-bottom-border--JYBoJ,
      .other-options-button-module--other-options-button--ZXQ1m, .ud-container.teach-page__container, .teach-page__pale-container.from-instructors--container--aloM4,
      .fs-exclude.message-list--message--9o4h7, .reply-form--form-container--4oFyn, .video-bookmark--video-add-bookmark-container--Sx8Ca,
      .transcript--transcript-panel--JLceZ, .ud-search-form-autocomplete-suggestion-block-list-item:hover {
        background-color: var(--grey-color) !important;
      }

      /* OTHERS */
      * {
        color: #f5f5f550 !important;
        border-color: var(--border-color) !important;
      }

      a[data-purpose="submit-button"] {
        border-color: var(--border-color);
      }

      header > a > img {
        filter: grayscale(1) invert(1) !important;
      }

      main .ud-heading-xs, .ud-search-form-autocomplete-suggestion-block-list-item:hover {
        color: var(--black-color)!important;
      }

      [data-purpose="buy-this-course-button"], [data-purpose="buy-this-course-button"] span.ud-btn-label {
        background-color: var(--black-color) !important;
        border: solid 1px var(--purple-color);
      }

      .header--header--g2QGk img {
        filter: none !important;
      }

      .question-list-question--question-wrapper--sdKgP:hover {
        background-color: inherit !important;
      }

      .curriculum-item-link--curriculum-item--OVP5S > .item-link:hover,
      .curriculum-item-link--curriculum-item--OVP5S.curriculum-item-link--is-current--2mKk4 > .item-link,
      .ribbon-module--ribbon--vVul-.ud-heading-xs, .thread-list--thread--iQxUo.thread-list--active--k-pEa,
      .thread-list--thread--iQxUo:hover {
        background-color: var(--hover-color) !important;
      }

      .ud-real-toggle-input:checked ~ .ud-fake-toggle-checkbox {
        background-color: var(--purple-color) !important;
      }
        .sidebar--close-btn-container--rq9SW {
        background: linear-gradient(to left, #000000 75%, rgba(255, 255, 255, 0))!important;
      }

      section[data-purpose="sidebar"],
      .nc-my-table-body,
      .nc-udemy-chat-gpt-container,
      .el-scrollbar,
      .el-popover {
        background-color: var(--grey-color) !important;
      }
      .el-select-dropdown__item.hover {
        background-color: var(--hover-color) !important;
      }
      .nc-udemy-chat-gpt-container * {
        color: #FFFFFF !important;
      }
      .ytsn-header * {
        color: #FFFFFF80 !important;
      }
      div[class*="captions-display--captions-cue-text--"] {
        color: #FFFFFF !important;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.8) !important;
        font-weight: bold !important;
      }
    `;

    const styleElement = document.createElement("style");
    styleElement.id = "extension-custom-css";
    styleElement.textContent = customCSS;
    document.head.appendChild(styleElement);
  } else {
    const styleElement = document.getElementById("extension-custom-css");
    if (styleElement) {
      styleElement.remove();
    }
  }
});
