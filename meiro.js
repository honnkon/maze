let meiro;
const input = $("input");
const c = $("canvas")[0].getContext("2d");
let n;
let nowx;
let nowy;
let nowmuki;
let x;
let y;
let muki;
let rand;
let inp;
let wait;
(function() {
	"use strict";
	console.log("meiro.jsの読み込み成功");

	function set() {
		if (input.val() % 2 != 1) {
			if (0 < ((input.val() + 1) % 2 - 1) && ((input.val() + 1) % 2 - 1) < 1) {
				input.val(Math.floor(input.val()));
			} else if (input.val % 2 == 0) {
				input.val(Number(input.val()) + 1);
			} else {
				input.val(Math.ceil(input.val()));
			}
		}
	}

	function make() {
		meiro = [];
		if (input.val() % 2 != 1) {
			if (0 < ((input.val() + 1) % 2 - 1) && ((input.val() + 1) % 2 - 1) < 1) {
				input.val(Math.floor(input.val()));
			} else if (input.val() % 2 == 0) {
				input.val(Number(input.val()) + 1);
			} else {
				input.val(Math.ceil(input.val));
			}
		}
		inp = input.val();
		for (let i = 0; i < inp; ++i) {
			meiro[i] = [];
			for (let j = 0; j < inp; ++j) {
				meiro[i][j] = 0;
			}
		}
		meiro[1][1] = 1;
		x = [1, 1];
		y = [1, 1];
		muki = [2, 1];
		while (muki.length > 0) {
			rand = Math.floor(Math.random() * muki.length);
			nowx = x[rand];
			nowy = y[rand];
			nowmuki = muki[rand];
			x.splice(rand, 1);
			y.splice(rand, 1);
			muki.splice(rand, 1);
			if (nowmuki == 1)
				nowy += 2
			else if (nowmuki == 2)
				nowx += 2
			else if (nowmuki == 3)
				nowx -= 2
			else if (nowmuki == 4)
				nowy -= 2
			if (0 < nowx && nowx < inp && 0 < nowy && nowy < inp) {
				if (meiro[nowy][nowx] == 0 && meiro[nowy][nowx] != undefined) {
					meiro[nowy][nowx] = 1;
					if (nowmuki == 1)
						nowy--
					else if (nowmuki == 2)
						nowx--
					else if (nowmuki == 3)
						nowx++
					else if (nowmuki == 4)
						nowy++
					meiro[nowy][nowx] = 1;
					if (nowmuki == 1)
						nowy++
					else if (nowmuki == 2)
						nowx++
					else if (nowmuki == 3)
						nowx--
					else if (nowmuki == 4)
						nowy--
					for (n = 0; n < 5; n++) {
						x.unshift(nowx);
						y.unshift(nowy);
						muki.unshift(n);
					}
				}
			}
		}
		byouga(inp);
	}

	function byouga(inp) {
		c.clearRect(-10, -10, 520, 520);
		for (let a = 0; a < inp; a++) {
			for (let b = 0; b < inp; b++) {
				if (meiro[a][b] == 0) {
					c.fillStyle = 'rgb(0,0,0)';
					c.fillRect(500 / inp * a - 1, 500 / inp * b - 1, 500 / inp + 2, 500 / inp + 2);
				}
			}
		}
	}

	window.onload = ()=>{
		$("#hirosa").blur(set);
		$("#make").click(make);
	}
}
)();
