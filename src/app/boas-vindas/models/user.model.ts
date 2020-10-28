import { ProfileEnum } from '../enums/profile.enum';

export class User {

	constructor(id: number, profile: ProfileEnum) {
		this.id = id;
		this.profile = profile;
	}
	
	hasPermission = () => this.profile === ProfileEnum.Administrator;

	private _id: number;
	private _profile: ProfileEnum;
	
	get id() { return this._id };
	set id(id:number) { this._id = id };
	
	get profile(): ProfileEnum { return this._profile; }
	set profile(value: ProfileEnum) { this._profile = value; }
}

