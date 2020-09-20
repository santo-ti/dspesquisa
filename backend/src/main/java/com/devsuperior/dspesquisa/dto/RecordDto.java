package com.devsuperior.dspesquisa.dto;

import java.io.Serializable;
import java.time.Instant;

import com.devsuperior.dspesquisa.entities.Record;
import com.devsuperior.dspesquisa.entities.enums.Platform;

public class RecordDto implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;
	
	private String name;
	
	private Integer age;
	
	private Instant moment;
	
	private String gameTitle;
	
	private Platform gamePlatform;
	
	private String gameGenreName;

	public RecordDto() {
		super();
	}

	public RecordDto(Record entity) {
		super();
		this.id = entity.getId();
		this.name = entity.getName();
		this.age = entity.getAge();
		this.moment = entity.getMoment();
		this.gameTitle = entity.getGame().getTitle();
		this.gamePlatform = entity.getGame().getPlatform();
		this.gameGenreName = entity.getGame().getGenre().getName();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public Instant getMoment() {
		return moment;
	}

	public void setMoment(Instant moment) {
		this.moment = moment;
	}

	public String getGameTitle() {
		return gameTitle;
	}

	public void setGameTitle(String gameTitle) {
		this.gameTitle = gameTitle;
	}

	public Platform getGamePlatform() {
		return gamePlatform;
	}

	public void setGamePlatform(Platform gamePlatform) {
		this.gamePlatform = gamePlatform;
	}

	public String getGameGenreName() {
		return gameGenreName;
	}

	public void setGameGenreName(String gameGenreName) {
		this.gameGenreName = gameGenreName;
	}
	
}
