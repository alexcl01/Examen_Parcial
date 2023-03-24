
export interface KeyboardReactInterface extends SimpleKeyboard {
    options: SimpleKeyboard["options"] & {
      keyboardRef?: (r: any) => void;
    };
  }  

export interface SimpleKeyboard {
        input: KeyboardInput;
        options: KeyboardOptions;
        utilities: Utilities;
        caretPosition: number | null;
        caretPositionEnd: number | null;
        keyboardDOM: KeyboardElement;
        keyboardPluginClasses: string;
        keyboardDOMClass: string;
        buttonElements: KeyboardButtonElements;
        currentInstanceName: string;
        allKeyboardInstances: {
                [key: string]: SimpleKeyboard;
        };
        keyboardInstanceNames: string[];
        isFirstKeyboardInstance: boolean;
        physicalKeyboard: PhysicalKeyboard;
        modules: {
                [key: string]: any;
        };
        activeButtonClass: string;
        holdInteractionTimeout: number;
        holdTimeout: number;
        isMouseHold: boolean;
        initialized: boolean;
        candidateBox: CandidateBox | null;
        keyboardRowsDOM: KeyboardElement;
        defaultName: string;
        activeInputElement: HTMLInputElement | HTMLTextAreaElement | null;

        constructor: (selectorOrOptions?: string | HTMLDivElement | KeyboardOptions, keyboardOptions?: KeyboardOptions) => any
        handleParams: (selectorOrOptions?: string | HTMLDivElement | KeyboardOptions, keyboardOptions?: KeyboardOptions) => {
                keyboardDOMClass: string;
                keyboardDOM: KeyboardElement;
                options: Partial<KeyboardOptions | undefined>;
        };

        getOptions: () => KeyboardOptions;
        getCaretPosition: () => number | null;
        getCaretPositionEnd: () => number | null;

        setCaretPosition(position: number | null, endPosition?: number | null): void;

        getInputCandidates(input: string): {
                candidateKey: string;
                candidateValue: string;
        } | Record<string, never>;

        showCandidatesBox(candidateKey: string, candidateValue: string, targetElement: KeyboardElement): void;

        handleButtonClicked(button: string, e?: KeyboardHandlerEvent): void;

        getMouseHold(): boolean;

        setMouseHold(value: boolean): void;

        handleButtonMouseDown(button: string, e: KeyboardHandlerEvent): void;

        handleButtonMouseUp(button?: string, e?: KeyboardHandlerEvent): void;

        handleKeyboardContainerMouseDown(e: KeyboardHandlerEvent): void;

        handleButtonHold(button: string): void;

        syncInstanceInputs(): void;

        clearInput(inputName?: string): void;

        getInput(inputName?: string, skipSync?: boolean): string;

        getAllInputs(): KeyboardInput;

        setInput(input: string, inputName?: string, skipSync?: boolean): void;

        replaceInput(inputObj: KeyboardInput): void;

        setOptions(options?: {}): void;

        changedOptions(newOptions: Partial<KeyboardOptions>): string[];

        onSetOptions(changedOptions?: string[]): void;

        resetRows(): void;

        dispatch(callback: (instance: SimpleKeyboard, key?: string) => void): void;

        addButtonTheme(buttons: string, className: string): void;

        removeButtonTheme(buttons: string, className: string): void;

        getButtonElement(button: string): KeyboardElement | KeyboardElement[] | undefined;

        inputPatternIsValid(inputVal: string): boolean;

        setEventListeners(): void;

        handleKeyUp(event: KeyboardHandlerEvent): void;

        handleKeyDown(event: KeyboardHandlerEvent): void;

        handleMouseUp(event: KeyboardHandlerEvent): void;

        handleTouchEnd(event: KeyboardHandlerEvent): void;

        handleSelect(event: KeyboardHandlerEvent): void;

        handleSelectionChange(event: KeyboardHandlerEvent): void;

        caretEventHandler(event: KeyboardHandlerEvent): void;

        recurseButtons(fn: any): void;

        destroy(): void;

        getButtonThemeClasses(button: string): string[];

        setDOMButtonAttributes(button: string, callback: any): void;
        onTouchDeviceDetected(): void;

        disableContextualWindow(): void;

        processAutoTouchEvents(): void;

        onInit(): void;

        beforeFirstRender(): void;

        beforeRender(): void;

        onRender(): void;

        onModulesLoaded(): void;

        registerModule: (name: string, initCallback: any) => void;

        loadModules(): void;

        getModuleProp(name: string, prop: string): any;

        getModulesList(): string[];

        parseRowDOMContainers(rowDOM: HTMLDivElement, rowIndex: number, containerStartIndexes: number[], containerEndIndexes: number[]): HTMLDivElement;

        getKeyboardClassString: (...baseDOMClasses: any[]) => string;

        render(): void;
}

export interface PhysicalKeyboard {
        getOptions: () => KeyboardOptions;
        dispatch: any;

        constructor: ({ dispatch, getOptions }: PhysicalKeyboardParams) => any
        handleHighlightKeyDown(e: KeyboardEvent): void;
        handleHighlightKeyUp(e: KeyboardEvent): void;

        getSimpleKeyboardLayoutKey(e: KeyboardEvent): string;

        keyCodeToKey(keyCode: number): string;
        isMofifierKey: (e: KeyboardEvent) => boolean;
}

export interface Utilities {
        getOptions: () => KeyboardOptions;
        getCaretPosition: () => number | null;
        getCaretPositionEnd: () => number | null;
        dispatch: any;
        maxLengthReached: boolean;

        constructor: ({ getOptions, getCaretPosition, getCaretPositionEnd, dispatch, }: UtilitiesParams) => any

        getButtonType(button: string): string;

        getButtonClass(button: string): string;

        getDefaultDiplay(): {
                "{bksp}": string;
                "{backspace}": string;
                "{enter}": string;
                "{shift}": string;
                "{shiftleft}": string;
                "{shiftright}": string;
                "{alt}": string;
                "{s}": string;
                "{tab}": string;
                "{lock}": string;
                "{capslock}": string;
                "{accept}": string;
                "{space}": string;
                "{//}": string;
                "{esc}": string;
                "{escape}": string;
                "{f1}": string;
                "{f2}": string;
                "{f3}": string;
                "{f4}": string;
                "{f5}": string;
                "{f6}": string;
                "{f7}": string;
                "{f8}": string;
                "{f9}": string;
                "{f10}": string;
                "{f11}": string;
                "{f12}": string;
                "{numpaddivide}": string;
                "{numlock}": string;
                "{arrowup}": string;
                "{arrowleft}": string;
                "{arrowdown}": string;
                "{arrowright}": string;
                "{prtscr}": string;
                "{scrolllock}": string;
                "{pause}": string;
                "{insert}": string;
                "{home}": string;
                "{pageup}": string;
                "{delete}": string;
                "{forwarddelete}": string;
                "{end}": string;
                "{pagedown}": string;
                "{numpadmultiply}": string;
                "{numpadsubtract}": string;
                "{numpadadd}": string;
                "{numpadenter}": string;
                "{period}": string;
                "{numpaddecimal}": string;
                "{numpad0}": string;
                "{numpad1}": string;
                "{numpad2}": string;
                "{numpad3}": string;
                "{numpad4}": string;
                "{numpad5}": string;
                "{numpad6}": string;
                "{numpad7}": string;
                "{numpad8}": string;
                "{numpad9}": string;
        };

        getButtonDisplayName(button: string, display: KeyboardOptions["display"], mergeDisplay?: boolean): string;

        getUpdatedInput(button: string, input: string, caretPos: any, caretPosEnd?: any, moveCaret?: boolean): string;

        updateCaretPos(length: number, minus?: boolean): void;

        updateCaretPosAction(length: number, minus?: boolean): number | null;

        addStringAt(source: string, str: string, position?: number, positionEnd?: number, moveCaret?: boolean): string;

        isStandardButton: (button: string) => boolean | "";

        removeAt(source: string, position?: number, positionEnd?: number, moveCaret?: boolean): string;

        removeForwardsAt(source: string, position?: number, positionEnd?: number, moveCaret?: boolean): string;

        handleMaxLength(inputObj: KeyboardInput, updatedInput: string): boolean | undefined;

        isMaxLengthReached(): boolean;

        isTouchDevice(): number | true;

        pointerEventsSupported(): boolean;

        camelCase(str: string): string;

        chunkArray<T>(arr: T[], size: number): T[][];


        getRtlOffset(index: number, input: string): number;

}
export interface KeyboardLayoutObject {
        [key: string]: string[];
}
export type KeyboardButtonTheme = {
        class: string;
        buttons: string;
} | null;
export interface KeyboardButtonAttributes {
        attribute: string;
        value: string;
        buttons: string;
}
export interface KeyboardInput {
        [key: string]: string;
}
export type CandidateBoxParams = {
        utilities: Utilities;
        options: KeyboardOptions;
};
export type CandidateBoxShowParams = {
        candidateValue: string;
        targetElement: KeyboardElement;
        onSelect: (selectedCandidate: string, e: MouseEvent) => void;
};
export type CandidateBoxRenderParams = {
        candidateListPages: string[][];
        targetElement: KeyboardElement;
        pageIndex: number;
        nbPages: number;
        onItemSelected: (selectedCandidate: string, e: MouseEvent) => void;
};
export type KeyboardElement = HTMLDivElement | HTMLButtonElement;
export type KeyboardHandlerEvent = any;
export interface KeyboardButtonElements {
        [key: string]: KeyboardElement[];
}
export interface UtilitiesParams {
        getOptions: () => KeyboardOptions;
        getCaretPosition: () => number | null;
        getCaretPositionEnd: () => number | null;
        dispatch: any;
}
export interface PhysicalKeyboardParams {
        getOptions: () => KeyboardOptions;
        dispatch: any;
}
export interface KeyboardOptions {

        layout?: KeyboardLayoutObject;

        layoutName?: string;

        display?: {
                [button: string]: string;
        };

        mergeDisplay?: boolean;

        theme?: string;

        buttonTheme?: KeyboardButtonTheme[];
     
        buttonAttributes?: KeyboardButtonAttributes[];
      
        debug?: boolean;
        
        newLineOnEnter?: boolean;
        
        tabCharOnTab?: boolean;
       
        inputName?: string;
        
        maxLength?: any;
      
        syncInstanceInputs?: boolean;
       
        physicalKeyboardHighlight?: boolean;
    
        physicalKeyboardHighlightPress?: boolean;
    
        physicalKeyboardHighlightPressUseClick?: boolean;
    
        physicalKeyboardHighlightPressUsePointerEvents?: boolean;
     
        physicalKeyboardHighlightTextColor?: string;
        
        physicalKeyboardHighlightBgColor?: string;
      
        physicalKeyboardHighlightPreventDefault?: boolean;
      
        preventMouseDownDefault?: boolean;
      
        preventMouseUpDefault?: boolean;
      
        stopMouseDownPropagation?: boolean;
      
        stopMouseUpPropagation?: boolean;
      
        useButtonTag?: boolean;
       
        disableCaretPositioning?: boolean;
    
        inputPattern?: any;
      
        useTouchEvents?: boolean;
        
        autoUseTouchEvents?: boolean;
     
        useMouseEvents?: boolean;
       
        disableButtonHold?: boolean;
    
        rtl?: boolean;
 
        enableLayoutCandidates?: boolean;
 
        layoutCandidates?: {
                [key: string]: string;
        };
       
        excludeFromLayout?: {
                [key: string]: string[];
        };
       
        layoutCandidatesPageSize?: number;
        
        layoutCandidatesCaseSensitiveMatch?: boolean;
    
        disableCandidateNormalization?: boolean;
       
        enableLayoutCandidatesKeyPress?: boolean;
        
        onRender?: (instance?: SimpleKeyboard) => void;

        onInit?: (instance?: SimpleKeyboard) => void;

        onChange?: (input: string, e?: MouseEvent) => any;

        onChangeAll?: (inputObj: KeyboardInput, e?: MouseEvent) => any;

        onKeyPress?: (button: string, e?: MouseEvent) => any;
 
        onKeyReleased?: (button: string, e?: MouseEvent) => any;

        [name: string]: any;
}
export interface CandidateBox {
    utilities: Utilities;
    options: KeyboardOptions;
    candidateBoxElement: HTMLDivElement;
    pageIndex: number;
    pageSize: number;
    constructor: ({ utilities, options }: CandidateBoxParams) => any
    destroy(): void;
    show({ candidateValue, targetElement, onSelect, }: CandidateBoxShowParams): void;
    renderPage({ candidateListPages, targetElement, pageIndex, nbPages, onItemSelected, }: CandidateBoxRenderParams): void;
}
