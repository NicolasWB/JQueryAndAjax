package online.shixun.project.dto;

public class City {
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

	public City(String code, String name) {
		super();
		this.name = name;
		this.code = code;
	}

	public City() {
		super();
	}

	@Override
	public String toString() {
		return "City [name=" + name + ", code=" + code + "]";
	}

}
