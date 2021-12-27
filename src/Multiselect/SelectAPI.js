import BVSelect from "@/Multiselect/js/bvselect";

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
            breakpoint: 450,
            // названия ивентов для шины
            selectEvent: 'select',
            unSelect:'unselect',
        });
    }
}
