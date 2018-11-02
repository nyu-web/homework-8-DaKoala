(function() {
    const holder = document.querySelector('.holder');
    const buttons = document.querySelector('.control__button-wrapper').children;
    const cradles = document.querySelector('.holder').children;
    const clearStyle = function(ele) {
        ele.classList.remove('cradle--left', 'cradle--right', 'cradle--both');
    };

    const createCradle = function() {
        const cradle = document.createElement('div');
        cradle.classList.add('cradle');
        const line = document.createElement('div');
        line.classList.add('cradle__line');
        const sphere = document.createElement('div');
        sphere.classList.add('cradle__ball');
        cradle.appendChild(line);
        cradle.appendChild(sphere);
        return cradle;
    };

    const addStyle = function(ele, type=2) {
        if (type === 0) {
            ele.classList.add('cradle--left');
        } else if (type === 1) {
            ele.classList.add('cradle--right');
        } else {
            ele.classList.add('cradle--both')
        }
    };

    const liftSphere = function(n) {
        for (let i = 0; i < Math.ceil(cradles.length / 2); i++) {
            if (i >= cradles.length - n) {
                addStyle(cradles[i]);
                addStyle(cradles[cradles.length - 1 - i]);
            } else if (i < n) {
                addStyle(cradles[i], 0);
                addStyle(cradles[cradles.length - 1 - i], 1);
            } else {
                clearStyle(cradles[i]);
                clearStyle(cradles[cradles.length - 1 - i]);
            }
        }
    };

    for (const btn of buttons) {
        btn.addEventListener('click', function(e) {
            holder.innerHTML = '';
            for (let i = 0; i < 5; i++) {
                holder.appendChild(createCradle());
            }
            liftSphere(parseInt(e.target.dataset.num));
        });
    }
})();