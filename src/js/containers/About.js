import React, { Component } from 'react';
import { withRouter } from 'react-router';
import NProgress from 'nprogress';
import marked from 'marked';


import Header from '../components/Header.js';


class About extends Component {
	constructor (props){
		super(props);
		this.showAlipay = this.showAlipay.bind(this);
		this.showWeChat = this.showWeChat.bind(this);
	}
	componentWillMount (){
		NProgress.start();
	}
	componentDidMount (){
		NProgress.done();
		this.refs.log.innerHTML = marked('基于 **React** 单页博客\r\n\r\n`React` `Less` `ES6` `JSX` `Grunt` `webpack`\r\n\r\n持续更新中...\r\n## 日志\r\n\r\n### v1.2.6\r\n\r\n> 增加 Vue2 版本入口，优化路径输出\r\n\r\n### v1.2.5\r\n\r\n> 增加 ng2 版本入口，优化一些界面\r\n> \r\n> 代码高亮主题更换为 `zenburn`\r\n\r\n### v1.2.4\r\n\r\n> 优化 `label` 请求及数据树，减少网络资源消耗，使页面无需等待更加快速渲染\r\n> \r\n> 新增 **HSV** 算法，目的是为了辅助快速准确的渲染 `label` 相关样式 *\r\n\r\n### v1.2.3\r\n\r\n> 关于和搜索界面优化，增加update日志\r\n> \r\n> 代码高亮主题更换为 `monokai-sublime`\r\n> \r\n> 优化资源加载速度 *\r\n\r\n### v1.2.2\r\n\r\n> 优化jQuery载入慢的问题,采用cdn加速处理\r\n\r\n### v1.2.1\r\n\r\n> 优化代码高亮Js载入慢,改采用cdn加速处理\r\n> \r\n> css样式优化\r\n\r\n### v1.2.0\r\n\r\n> 新增代码高亮Js及对应的css皮肤\r\n\r\n### v1.1.1\r\n\r\n> 页面切换的进度条去除 `showSpinner` 等设置\r\n\r\n### v1.1.0\r\n\r\n> 新增页面切换的进度条,更新一些css\r\n\r\n### v1.0.1\r\n\r\n> 新增数据储存及一些优化\r\n\r\n### v1.0.0\r\n\r\n> 列表/标签/关于/搜索等模块开发完成,第一版发布');
		this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave);
	}
	routerWillLeave (){
		NProgress.start();
	}
	showfn (bg,style){
		if (bg.className.indexOf('block') < 0){
			// $('body').css('overflow-y', 'hidden');
			bg.className += ' block';
			style.className += ' block';
			setTimeout(function(){
				bg.className += ' in';
				style.className += ' in';
			}, 10);
		}else {
			bg.className = bg.className.replace(' in', '');
			style.className = style.className.replace(' in', '');
			setTimeout(function(){
				bg.className = bg.className.replace(' block', '');
				style.className = style.className.replace(' block', '');
				// $('body').css('overflow-y', 'auto');
			}, 200);
		}
	}
	showAlipay (){
		this.showfn(this.refs.bg,this.refs.alipay);
	}
	showWeChat (){
		this.showfn(this.refs.bg,this.refs.WeChat);
	}
	render (){
		let bgColor = '#f3f3f3';
		return (
			<div className="content">
				<Header />
				<div className="mt30">
					<p className="bbox pt15 pr30 pb15 pl30" style={{backgroundColor: bgColor, borderRadius: '6px'}}>
						<b className="f16 ac abt">一个 <del>沉迷</del> 穿插<br />在魔法世界的 <del>大魔王</del> 魔法师...</b>
					</p>
					<p className="bbox pt15 pr30 pb15 pl30 mt30 f16 lh30" style={{backgroundColor: bgColor, borderRadius: '6px'}}>
						<del>如果你想赞助我</del> 你的支持就是我的动力
						<br />欢迎打赏一杯咖啡给我
						<a className="gray f14 ml10" href="javascript:;" onClick={this.showAlipay} style={{textDecoration: 'underline'}}>Alipay</a>
						<a className="gray f14 ml10" href="javascript:;" onClick={this.showWeChat} style={{textDecoration: 'underline'}}>WeChat</a>
						<br />商务合作及其他相关联系 Email: <a className="f14" href="mailto:1477546184@qq.com" style={{color: '#1d89e2'}}>1477546184@qq.com</a>
						<br /><small className="gray">* 有教学解惑需求也可以联系我 / 开放友链 · 欢迎互链 / 感谢各位的支持</small>
						<br /><small className="gray">* 打赏请备注才能将你添加到列表并增加打赏友链(如果你有博客相关)</small>
					</p>
					<div className="al bbox pt15 pr30 pb15 pl30 mt30 f12" style={{backgroundColor: bgColor, borderRadius: '6px'}}>
						<p className="f14 mb10">打赏列表</p>
						<table width="100%">
							<thead>
								<tr>
									<th>时间</th>
									<th>支付宝/微信</th>
									<th>姓名</th>
									<th>金额(¥)</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>2016-10-28</td>
									<td>2365***152@qq.com</td>
									<td>*明月</td>
									<td>6.66</td>
								</tr>
								<tr>
									<td>2016-11-01</td>
									<td>s***2@163.com</td>
									<td>*彬</td>
									<td>19.50</td>
								</tr>
								<tr>
									<td>2016-11-09</td>
									<td>36***562@qq.com</td>
									<td>*方</td>
									<td>10.60</td>
								</tr>
								<tr>
									<td>2016-11-11</td>
									<td>196***930@qq.com</td>
									<td>*伟伟</td>
									<td>8.00</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="list-view bbox mb30 views mt30 pt15 pr30 pb15 pl30 logs" style={{backgroundColor: bgColor, borderRadius: '6px'}} ref="log"></div>
				</div>
				<div className="opacity-bg" ref="bg"></div>
				<div className="alipay" ref="alipay" onClick={this.showAlipay}><img src="https://ww3.sinaimg.cn/mw690/005EkSOcgw1f96lrl2zoij30r60r6n27.jpg" /></div>
				<div className="WeChat" ref="WeChat" onClick={this.showWeChat}><img src="https://ww1.sinaimg.cn/mw690/005EkSOcgw1f96o9nfy0aj30lm0lmq59.jpg" /></div>
			</div>
		)
	}
};

export default withRouter(About)