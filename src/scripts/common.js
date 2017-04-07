const Enumerable = require('linq-js');

module.exports = {
	defaultLang: 'zh-cn',
	versions: ['2.1.15', '2.1.16'],
	get earliest() {
		return this.versions[0];
	},
	get lastest() {
		return this.versions[this.versions.length - 1];
	},
	histroys(histroys) {
		if (histroys) {
			return Enumerable.zip(histroys, Enumerable.skip(histroys, 1).concat([0]), (v, next) => {
				v.deprecated = v.deprecated || next && next.since;
				return v;
			});
		} else {
			return Enumerable.empty();
		}
	},
	versionComparer(version, other) {
		let v = Enumerable.zip(version.split('.'), other.split('.'), (ver, otherVer) => ({ ver, otherVer })).firstOrDefault({ ver: 0, otherVer: 0 }, v => v.ver !== v.otherVer);
		return v.ver === v.otherVer ? 0 : parseInt(v.ver) > parseInt(v.otherVer) ? 1 : -1;
	},
	maxVersion(...versions) {
		return Enumerable.max(versions, '', this.versionComparer);
	},
	minVersion(...versions) {
		return Enumerable.min(versions, '', this.versionComparer);
	},
	isNewer(version, basaVersion) {
		let v = Enumerable.zip((version || this.earliest).split('.'), basaVersion.split('.'), (ver, baseVer) => ({ ver, baseVer })).firstOrDefault({ ver: 0, baseVer: 0 }, v => v.ver !== v.baseVer);
		return parseInt(v.ver) <= parseInt(v.baseVer);
	},
	isOlder(version, basaVersion) {
		let v = Enumerable.zip((version || this.lastest).split('.'), basaVersion.split('.'), (ver, baseVer) => ({ ver, baseVer })).firstOrDefault({ ver: 0, baseVer: 0 }, v => v.ver !== v.baseVer);
		return parseInt(v.ver) >= parseInt(v.baseVer);
	},
	capitalize(value) {
		if (!value) return '';
		value = value.toString();
		return value.charAt(0).toUpperCase() + value.slice(1);
	},
	upper(value) {
		if (!value) return '';
		return value.toString().toUpperCase();
	},
	lower(value) {
		if (!value) return '';
		return value.toString().toLowerCase();
	},
};