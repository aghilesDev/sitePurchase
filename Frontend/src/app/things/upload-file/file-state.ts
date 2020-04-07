export class FileState {
    key?: string;
    name?: string;
    link: string;
    progress: number;
    private uploading: boolean;
    private successful: boolean;
    constructor(name?, key?, link, progress = 0, uploading = true, successful = false) {
        this.name = name;
        this.key = key;
        this.link = link;
        this.progress = progress;
        this.uploading = uploading;
        this.successful = successful;
    }

    set Successful(val: boolean) {

        this.uploading = false;
        this.successful = val;
    }

    get Successful() {
        return this.successful && !this.uploading;
    }

    set Failed(val: boolean) {
        this.uploading = false;
        this.successful = !val;
    }

    get Failed() {
        return !this.successful && !this.uploading;
    }

    set Uploading(val: boolean) {
        this.uploading = val;
    }

    get Uploading() {
        return this.uploading;
    }


}