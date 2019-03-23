package cn.com.nantian.pojo.entity;


import java.io.Serializable;
import java.util.List;
import java.util.Map;

/**
 * 执行结果实体类
 * @author Administrator
 *
 */
public class Result implements Serializable{

	private boolean success;
	private String message;
	private  int num;
	private List  list;
	private Map map;

	public Map getMap() {
		return map;
	}

	public void setMap(Map map) {
		this.map = map;
	}

	public int getNum() {
		return num;
	}

	public void setNum(int num) {
		this.num = num;
	}

	public List getList() {
		return list;
	}

	public void setList(List list) {
		this.list = list;
	}

	public boolean isSuccess() {
		return success;
	}
	public void setSuccess(boolean success) {
		this.success = success;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public Result(boolean success, String message) {
		super();
		this.success = success;
		this.message = message;
	}

	public Result(boolean code, int num,List  list) {
		super();
		this.success = success;
		this.num = num;
		this.list=list;
	}

}
