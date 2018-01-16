<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>选择地区</title>
<script type="text/javascript" src="../plugins/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="../js/select.js"></script>
</head>
<body>
	<select id="provinceSelector" name="province">
		<option value="">请选择省份...</option>
		<c:forEach var="province" items="${provinceList }">
			<option value="${province.code }">${province.name}</option>
		</c:forEach>
	</select>
	<select id="citySelector" name="city">
		<option value="">请选择城市...</option>
		<c:forEach var="city" items="${list }">
			<option value="${city.code }">${city.name}</option>
		</c:forEach>
	</select>
	<select id="districtSelector" name="district">
		<option value="">请选择城区...</option>
	</select>
</body>
</html>