// elements
document.body.append(
  FueJs.createElement('div', { className: 'row' }, [
    // right
    FueJs.createElement('div', { className: 'col-md-5 right' }, [
      FueJs.createElement(
        'span',
        { className: 'col-md-8 col-md-offset-2 headTitle' },
        'ورود'
      ),
      FueJs.createElement('div', { className: 'loginForm' }, [
        FueJs.createElement('div', { className: 'col-md-8 col-md-offset-2' }, [
          FueJs.createElement('h3', {}, 'ورود به حساب کاربری'),
          FueJs.createElement(
            'h5',
            {},
            'جهت ورود به برنامه نام کاربری و رمز عبور خود را وارد نمایید'
          ),
        ]),
        FueJs.createElement(
          'div',
          { className: 'row' },
          FueJs.createElement(
            'div',
            { className: 'col-md-8 col-md-offset-2' },
            [
              FueJs.createElement('div', { className: 'userInfo' }, [
                FueJs.createElement('input', {
                  className: 'form-control',
                  id: 'exampleInputEmail1',
                  type: 'email',
                  placeholder: 'نام کاربری',
                }),
                FueJs.createElement('i', { className: 'fas fa-user icon' }),
              ]),
              FueJs.createElement('div', { className: 'userInfo' }, [
                FueJs.createElement('input', {
                  className: 'form-control',
                  id: 'exampleInputPassword1',
                  type: 'password',
                  placeholder: 'رمز عبور',
                }),
                FueJs.createElement('i', { className: 'fas fa-lock icon' }),
              ]),
              FueJs.createElement('div', { className: 'userInfo' }, [
                FueJs.createElement('i', {
                  className: 'fas fa-vector-square iconX',
                }),
                FueJs.createElement('input', {
                  className: 'col-md-7',
                  id: 'txtCompare',
                  type: 'text',
                  placeholder: 'کد امنیتی',
                }),
                FueJs.createElement('input', {
                  className: 'col-md-4',
                  id: 'txtCaptcha',
                  type: 'text',
                }),
                FueJs.createElement('i', {
                  className: 'fas fa-sync-alt',
                  onclick: 'GenerateCaptcha()',
                }),
              ]),
              FueJs.createElement(
                'button',
                {
                  className: 'btn btn-primary btn-block',
                  id: 'mYbtn',
                },
                'ورود'
              ),
              FueJs.createElement('label', {}, [
                FueJs.createElement('input', { type: 'checkbox' }),
                'مرا به خاطر بسپار',
              ]),
            ]
          )
        ),
      ]),
    ]),
    // left
    FueJs.createElement(
      'div',
      { className: 'col-md-7 left' },
      FueJs.createElement(
        'div',
        {
          className: 'screen col-lg-12 col-md-12 col-sm-12 col-xs-12',
        },
        [
          FueJs.createElement(
            'div',
            { className: 'logo' },
            FueJs.createElement('img', {
              alt: '',
              className: 'logoPic',
              src: './Assets/PNG/Logo.png',
            })
          ),
          FueJs.createElement('img', {
            src: './Assets/PNG/radar-angle.png',
            className:
              'beam col-sm-offset-5 col-md-offset-5 col-xs-offset-5 col-lg-offset-5',
            alt: '',
            width: '20%',
            height: '100%',
          }),
          FueJs.createElement('div', { className: 'circles' }, [
            FueJs.createElement('div', { className: 'element circleOne' }),
            FueJs.createElement('div', { className: 'element circleTwo' }),
            FueJs.createElement('div', { className: 'element circleThree' }),
            FueJs.createElement('div', { className: 'element circleFour' }),
            FueJs.createElement('div', { className: 'element circleFive' }),
            FueJs.createElement('div', { className: 'element circleSix' }),
            FueJs.createElement('div', { className: 'element circleSeven' }),
            FueJs.createElement(
              'div',
              { className: 'textAntivirus col-12' },
              'Muiti Anti-Virus & Cybersecurity'
            ),
          ]),
        ]
      )
    ),
  ])
);

/* Remove spaces from Captcha Code */
function removeSpaces(string) {
  return string.split(' ').join('');
}

function validateCatcha() {
  const str1 = removeSpaces(document.getElementById('txtCaptcha').value);
  const str2 = removeSpaces(document.getElementById('txtCompare').value);

  if (str1 === str2) {
    alert('correct Captcha');
  } else {
    alert('incorrect Captcha');
  }
}

/* Function to Generat Captcha */
function GenerateCaptcha() {
  const chr1 = `${Math.ceil(Math.random() * 10)}`;
  const chr2 = `${Math.ceil(Math.random() * 10)}`;
  const chr3 = `${Math.ceil(Math.random() * 10)}`;

  const str = new Array(4).join().replace(/(.|$)/g, function() {
    return ((Math.random() * 36) | 0)
      .toString(36)
      [Math.random() < 0.5 ? 'toString' : 'toUpperCase']();
  });
  const captchaCode = `${str + chr1} ${chr2} ${chr3}`;
  document.getElementById('txtCaptcha').value = captchaCode;
}
const btn = document.getElementById('mYbtn');
btn.addEventListener('click', validateCatcha);

window.onload = GenerateCaptcha;

// j query
jQuery.htmlPrefilter = function(html) {
  return html;
};
