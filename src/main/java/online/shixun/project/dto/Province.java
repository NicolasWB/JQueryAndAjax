package online.shixun.project.dto;

public class Province {
	private String name;
	private String code;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public Province(String code, String name) {
		super();
		this.name = name;
		this.code = code;
	}

	public Province() {
		super();
	}

}
