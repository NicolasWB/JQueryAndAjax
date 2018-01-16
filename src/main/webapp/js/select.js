$(document).ready(function() {
	// 选择省
	$("#provinceSelector").change(function() {
		// 获取选中的省编号
		var provinceCode = $("select[name='province']").val();

		// TODO 利用 $.get API 实现某一省下的所有市数据加载
		selectCity(provinceCode);
	});

	// 选择市

	$("#citySelector").change(function() {
		// 获取选中的市编号 var cityCode
		var cityCode = $("select[name='city']").val();
		// 实现某一市下的所有区数据加载
		selectDistrict(cityCode);
	});

});

// 获取对应城市列表（里面包括获取第一个城市的区县列表）
function selectCity(provinceCode) {

	// ajax请求所有市级单位
	$.get("/SpringMVCAJAX/city/address", {
		code : provinceCode
	}, function(data) {

		// 先清空城市下拉框
		$("select[name='city']").empty();
		// 先清空城区下拉框
		$("select[name='district']").empty();
		// 清空城市的下拉框之后，加上一句“请选择城市...”
		$("select[name='city']").append("<option value=''>请选择城市...</option>");
		// 清空城区的下拉框之后，加上一句“请选择城区...”
		$("select[name='district']").append(
				"<option value=''>请选择城区...</option>");
		$.each(data, function(i, d) {

			$("select[name='city']").append(
					"<option value='" + d.code + "'>" + d.name + "</option>");
		});

	}, 'json');
}
function selectDistrict(cityCode) {

	// var firstCityCode;

	// ajax请求所有市级单位
	$.get("/SpringMVCAJAX/district/address", {
		code : cityCode
	}, function(data) {

		// 先清空城区下拉框
		$("select[name='district']").empty();
		// 清空城区的下拉框之后，加上一句“请选择城区...”
		$("select[name='district']").append(
				"<option value=''>请选择城区...</option>");
		$.each(data, function(i, d) {

			$("select[name='district']").append(
					"<option value='" + d.code + "'>" + d.name + "</option>");
		});

	}, 'json');
}
