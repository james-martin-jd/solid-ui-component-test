const store = $rdf.graph();
const fetcher = new $rdf.Fetcher(store);
const providerList = [
    {
        label: 'Inrupt',
        providerImage: '/assets/images/Inrupt.png',
        value: 'https://inrupt.net/auth',
        providerDesc: 'Lorem ipsum dolor sit amet non ipsom dolor'
    },
    {
        label: 'Solid Community',
        providerImage: '/assets/images/Solid.png',
        value: 'https://solid.community',
        providerDesc: 'Lorem ipsum dolor sit non consectetur'
    },
    {
        label: 'Other (Enter WebID)',
        providerImage: '/assets/images/Generic.png',
        value: 0
    }
];
export class ProviderSelectComponent {
    componentDidLoad() {
    }
    handleChange(event) {
        this.selectedProvider = event.target.value;
        let provider = this.selectedProvider === 'Other (Enter WebID)' ? this.customProvider : this.selectedProvider;
        this.providerChanged.emit(provider);
    }
    customProviderChanged() {
        this.providerChanged.emit(this.customProvider);
    }
    render() {
        return h("div", null,
            h("select", { onInput: (event) => this.handleChange(event) },
                h("option", { value: "undefined" }, "Select an Identity Provider"),
                providerList.map((item) => h("option", { value: item.value || null }, item.label))),
            h("div", null, this.selectedProvider === 'Other (Enter WebID)'
                ? h("input", { type: "text", class: "select-provider-text", tabindex: "0", value: this.customProvider, onBlur: () => this.customProviderChanged })
                : h("span", null)));
    }
    static get is() { return "solid-provider-select"; }
    static get properties() { return {
        "selectedProvider": {
            "state": true
        }
    }; }
    static get events() { return [{
            "name": "providerChanged",
            "method": "providerChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:solid-provider-select:**/"; }
}
