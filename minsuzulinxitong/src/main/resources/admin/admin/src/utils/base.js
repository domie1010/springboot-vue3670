const base = {
    get() {
        return {
            url : "http://localhost:8080/minsuzulinxitong/",
            name: "minsuzulinxitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/minsuzulinxitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "民宿租赁系统"
        } 
    }
}
export default base
