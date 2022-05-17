export function clickOutside(node: Node, options: { enabled: boolean, cb: () => void }) {
    const handleClickOutside = ({ target }) => {
        if (node && !node.contains(target)) {
            options.cb();
        }
    }

    function update(enabled: boolean) {
        if (enabled) {
            window.addEventListener('click', handleClickOutside);
        } else {
            window.removeEventListener('click', handleClickOutside);
        }
    }

    update(options.enabled);

    return {
        update,
        destroy() {
            document.removeEventListener('click', handleClickOutside);
        }
    }
}