class Foobar {
    public bar(): void {
        console.log('bad linting');
        this.baz();
    }

    baz(): void {
        alert([0]);
    }
}







