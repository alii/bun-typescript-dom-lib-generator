/////////////////////////////
/// DOM ES6 APIs
/////////////////////////////

interface AudioTrackList {
    [Symbol.iterator](): IterableIterator<AudioTrack>
}

interface CSSRuleList {
    [Symbol.iterator](): IterableIterator<CSSRule>
}

interface CSSStyleDeclaration {
    [Symbol.iterator](): IterableIterator<string>
}

interface ClientRectList {
    [Symbol.iterator](): IterableIterator<ClientRect>
}

interface DOMRectList {
    [Symbol.iterator](): IterableIterator<DOMRect>
}

interface DOMStringList {
    [Symbol.iterator](): IterableIterator<string>
}

interface DOMTokenList {
    [Symbol.iterator](): IterableIterator<string>
}

interface DataTransferItemList {
    [Symbol.iterator](): IterableIterator<File>
}

interface FileList {
    [Symbol.iterator](): IterableIterator<File>
}

interface FormData {
    [Symbol.iterator](): IterableIterator<[string, FormDataEntryValue]>
    entries(): IterableIterator<[string, FormDataEntryValue]>;
    keys(): IterableIterator<string>;
    values(): IterableIterator<FormDataEntryValue>;
}

interface HTMLAllCollection {
    [Symbol.iterator](): IterableIterator<Element>
}

interface HTMLCollectionBase {
    [Symbol.iterator](): IterableIterator<Element>
}

interface Headers {
    [Symbol.iterator](): IterableIterator<[string, string]>
    entries(): IterableIterator<[string, string]>;
    keys(): IterableIterator<string>;
    values(): IterableIterator<string>;
}

interface MediaList {
    [Symbol.iterator](): IterableIterator<string>
}

interface MimeTypeArray {
    [Symbol.iterator](): IterableIterator<Plugin>
}

interface NamedNodeMap {
    [Symbol.iterator](): IterableIterator<Attr>
}

interface NodeList {
    [Symbol.iterator](): IterableIterator<Node>
}

interface Plugin {
    [Symbol.iterator](): IterableIterator<MimeType>
}

interface PluginArray {
    [Symbol.iterator](): IterableIterator<Plugin>
}

interface RTCStatsReport extends ReadonlyMap<string, any> {
}

interface SourceBufferList {
    [Symbol.iterator](): IterableIterator<SourceBuffer>
}

interface StyleSheetList {
    [Symbol.iterator](): IterableIterator<StyleSheet>
}

interface TextTrackCueList {
    [Symbol.iterator](): IterableIterator<TextTrackCue>
}

interface TextTrackList {
    [Symbol.iterator](): IterableIterator<TextTrack>
}

interface TouchList {
    [Symbol.iterator](): IterableIterator<Touch>
}

interface URLSearchParams {
    [Symbol.iterator](): IterableIterator<[string, string]>
    entries(): IterableIterator<[string, string]>;
    keys(): IterableIterator<string>;
    values(): IterableIterator<string>;
}

interface VideoTrackList {
    [Symbol.iterator](): IterableIterator<VideoTrack>
}
