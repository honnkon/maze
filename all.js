let copy;
let enabled_vue = true;

$(function() {
	"use strict";
	//厳密モードとして利用
	console.log("all.jsの読み込み成功");
	//読み込みが成功したことをログに記録
	console.log(`最終更新：${document.lastModified}`);
	//最終更新をログに記録

	//パンくずリスト（all.jsのみ）
	function breadcrumb(url, name) {
		//jQueryを使用して1行で追加
		$(`<li><a class="mypage" href="${url}">${name}</a></li>`)//HTMLを作成
		.appendTo("#breadcrumb");
		//パンくずリストにデータを追加
	}

	/**
	 * クリップボードにデータをコピーする
	 * @function
	 * @param {string} コピーするデータ
	 */
	copy = (value)=>{
		//利用できないときはfalseを返す
		try {
			//クリップボードにデータをコピー
			return navigator.clipboard.writeText(value);
		} catch {
			return false;
		}
	}

	//パンくずリストの作成
	breadcrumb("index.html", "トップページ");
	//index.htmlでないなら今のページを追加する
	if (String(location.href).split("/")[String(location.href).split("/").length-1] != "index.html") {
		breadcrumb(String(location.href).split("/")[String(location.href).split("/").length-1], document.title);
	}
});

const {createApp, ref} = Vue;