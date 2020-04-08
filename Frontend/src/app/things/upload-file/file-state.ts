export class FileState {
    id: string;
    name: string;
    progress: number;
    private uploading: boolean;
    private successful: boolean;
    link?: string;
    constructor(name: string, id: string, progress = 0, uploading = true, successful = false, link?) {
        this.name = name;
        this.id = id;
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