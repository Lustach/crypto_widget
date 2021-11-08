import BVSelect from "./js/bvselect";

export class Select{
    // this.select =
    initBVSelect() {
        return new BVSelect({
            selector: "#selectBox",
            width: "100%",
            searchbox: true,
            offset: true,
            placeholder: "Выбрать другую валюту",
            search_placeholder: "Введите название валюты",
            search_autofocus: true,
            // @ts-ignore
            breakpoint: 450
        });
    }
}