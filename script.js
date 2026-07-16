const root = document.body;
const themeToggle = document.getElementById("themeToggle");
const topbarRight = document.querySelector(".topbar-right");
const avatarPhoto = document.querySelector(".avatar-photo");
const sidebarToggle = document.getElementById("sidebarToggle");
const sidebar = document.getElementById("sidebar");
const collapseButton = document.querySelector(".collapse-button");
const moduleHeads = document.querySelectorAll(".nav-module-head");
const openCreateModal = document.getElementById("openCreateModal");
const requestForm = document.getElementById("requestForm");
const formFields = Array.from(document.querySelectorAll("[data-field]"));
const primaryField = document.querySelector("[data-primary-field]");
const detailModalBody = document.getElementById("detailModalBody");
const detailStatusActions = document.getElementById("detailStatusActions");
const detailRecordsDataNode = document.getElementById("detailRecordsData");
const inlineAlert = document.getElementById("inlineAlert");
const inlineAlertTitle = document.getElementById("inlineAlertTitle");
const inlineAlertText = document.getElementById("inlineAlertText");
const dismissAlert = document.getElementById("dismissAlert");
const entitySingular = root.dataset.entitySingular || "Data";
const entityPlural = root.dataset.entityPlural || "Master Data";
const detailViewType = root.dataset.detailView || "";
const activeDivision = root.dataset.activeDivision || "General Affairs";
const activeDivisionCode = root.dataset.activeDivisionCode || "GA";
const createModalBackdrop =
  document.getElementById("createModalBackdrop") || document.getElementById("modalBackdrop");
const detailModalBackdrop = document.getElementById("detailModalBackdrop");
const closeCreateModal =
  document.getElementById("closeCreateModal") || document.getElementById("closeModal");
const cancelCreateModal =
  document.getElementById("cancelCreateModal") || document.getElementById("cancelModal");
const closeDetailModal =
  document.getElementById("closeDetailModal") || document.getElementById("closeModal");
const cancelDetailModal =
  document.getElementById("cancelDetailModal") || document.getElementById("cancelModal");
const createModalTitle =
  document.getElementById("createModalTitle") || document.getElementById("modalTitle");
const createModalKicker =
  document.getElementById("createModalKicker") || document.getElementById("modalKicker");
const detailModalTitle = document.getElementById("modalTitle");
const detailModalKicker = document.getElementById("modalKicker");
const createModalCard = createModalBackdrop?.querySelector(".modal-card");
const detailModalCard = detailModalBackdrop?.querySelector(".modal-card");
const requestTableBody = document.getElementById("requestTableBody");
const mainTableBody = requestTableBody || document.querySelector(".panel-table tbody");
const autoDivisionField = document.querySelector("[data-auto-division]");
const autoSubmitDateField = document.querySelector("[data-auto-submit-date]");
const codeHintNode = document.querySelector("[data-code-hint]");

const itemPickerBackdrop = document.getElementById("itemPickerBackdrop");
const itemPickerCard = itemPickerBackdrop?.querySelector(".modal-card");
const itemPickerSearch = document.getElementById("itemPickerSearch");
const itemPickerList = document.getElementById("itemPickerList");
const openItemPickerButton = document.getElementById("openItemPicker");
const closeItemPicker = document.getElementById("closeItemPicker");
const cancelItemPicker = document.getElementById("cancelItemPicker");
const openQuickItemModalButton = document.getElementById("openQuickItemModal");
const selectedItemSummary = document.getElementById("selectedItemSummary");
const draftItemBackdrop = document.getElementById("draftItemBackdrop");
const draftItemCard = draftItemBackdrop?.querySelector(".modal-card");
const draftItemForm = document.getElementById("draftItemForm");
const openDraftItemModalButton = document.getElementById("openDraftItemModal");
const closeDraftItemModal = document.getElementById("closeDraftItemModal");
const cancelDraftItemModal = document.getElementById("cancelDraftItemModal");
const draftItemTitle = document.getElementById("draftItemTitle");
const draftItemKicker = document.getElementById("draftItemKicker");
const saveDraftItemButton = document.getElementById("saveDraftItemButton");
const draftItemsTableBody = document.getElementById("draftItemsTableBody");
const serviceItemBackdrop = document.getElementById("serviceItemBackdrop");
const serviceItemCard = serviceItemBackdrop?.querySelector(".modal-card");
const serviceItemForm = document.getElementById("serviceItemForm");
const openServiceItemModalButton = document.getElementById("openServiceItemModal");
const closeServiceItemModal = document.getElementById("closeServiceItemModal");
const cancelServiceItemModal = document.getElementById("cancelServiceItemModal");
const serviceItemTitle = document.getElementById("serviceItemTitle");
const serviceItemKicker = document.getElementById("serviceItemKicker");
const saveServiceItemButton = document.getElementById("saveServiceItemButton");
const serviceItemsTableBody = document.getElementById("serviceItemsTableBody");
const quoteItemBackdrop = document.getElementById("quoteItemBackdrop");
const quoteItemCard = quoteItemBackdrop?.querySelector(".modal-card");
const quoteItemForm = document.getElementById("quoteItemForm");
const openQuoteItemModalButton = document.getElementById("openQuoteItemModal");
const closeQuoteItemModal = document.getElementById("closeQuoteItemModal");
const cancelQuoteItemModal = document.getElementById("cancelQuoteItemModal");
const quoteItemTitle = document.getElementById("quoteItemTitle");
const quoteItemKicker = document.getElementById("quoteItemKicker");
const saveQuoteItemButton = document.getElementById("saveQuoteItemButton");
const quoteItemsTableBody = document.getElementById("quoteItemsTableBody");
const requestPickerBackdrop = document.getElementById("requestPickerBackdrop");
const requestPickerCard = requestPickerBackdrop?.querySelector(".modal-card");
const openRequestPickerModalButton = document.getElementById("openRequestPickerModal");
const closeRequestPickerModal = document.getElementById("closeRequestPickerModal");
const cancelRequestPickerModal = document.getElementById("cancelRequestPickerModal");
const requestPickerSearch = document.getElementById("requestPickerSearch");
const requestPickerList = document.getElementById("requestPickerList");
const poRequestPickerBackdrop = document.getElementById("poRequestPickerBackdrop");
const poRequestPickerCard = poRequestPickerBackdrop?.querySelector(".modal-card");
const openPoRequestPickerModalButton = document.getElementById("openPoRequestPickerModal");
const closePoRequestPickerModal = document.getElementById("closePoRequestPickerModal");
const cancelPoRequestPickerModal = document.getElementById("cancelPoRequestPickerModal");
const poRequestPickerSearch = document.getElementById("poRequestPickerSearch");
const poRequestPickerList = document.getElementById("poRequestPickerList");
const poItemPickerBackdrop = document.getElementById("poItemPickerBackdrop");
const poItemPickerCard = poItemPickerBackdrop?.querySelector(".modal-card");
const openPoItemModalButton = document.getElementById("openPoItemModal");
const closePoItemPickerModal = document.getElementById("closePoItemPickerModal");
const cancelPoItemPickerModal = document.getElementById("cancelPoItemPickerModal");
const confirmPoItemPickerModal = document.getElementById("confirmPoItemPickerModal");
const poOfferPickerList = document.getElementById("poOfferPickerList");
const poOfferPickerSearch = document.getElementById("poOfferPickerSearch");
const poOfferPaymentFilter = document.getElementById("poOfferPaymentFilter");
const poItemsTableBody = document.getElementById("poItemsTableBody");
const poItemsSubtotal = document.getElementById("poItemsSubtotal");

const quickItemBackdrop = document.getElementById("quickItemBackdrop");
const quickItemCard = quickItemBackdrop?.querySelector(".modal-card");
const quickItemForm = document.getElementById("quickItemForm");
const closeQuickItemModal = document.getElementById("closeQuickItemModal");
const cancelQuickItemModal = document.getElementById("cancelQuickItemModal");

const detailRecords = parseJsonNode(detailRecordsDataNode, {});
const masterItemsDataNode = document.getElementById("masterItemsData");
let masterItems = parseJsonNode(masterItemsDataNode, []);
let draftRequestItems = [];
let draftItemEditIndex = -1;
let draftServiceItems = [];
let serviceItemEditIndex = -1;
let draftQuoteItems = [];
let quoteItemEditIndex = -1;
let activeDetailCode = "";
let selectedRequestNeed = "";
let selectedRequestItems = [];
let selectedPoOffers = [];
let draftPoItems = [];
let selectedPoOfferIndexes = new Set();
let editingRecordCode = "";

const roleOptions = [
  { value: "pemohon", label: "Pemohon" },
  { value: "kepala_divisi", label: "Kadiv" },
  { value: "kepala_akunting", label: "Ka. Akunting" },
  { value: "purchasing", label: "Purchasing" },
  { value: "kepala_purchasing", label: "Ka. Purchasing" },
  { value: "admin", label: "Admin" }
];
const storedRole = localStorage.getItem("procurement-active-role");
let activeRole = roleOptions.some((role) => role.value === storedRole) ? storedRole : "pemohon";

closeAllModals({ resetForm: false });
renderRoleSwitcher();
applyRoleAccess();

const storedTheme = localStorage.getItem("procurement-theme");
if (storedTheme === "dark" || storedTheme === "light") {
  root.dataset.theme = storedTheme;
}

themeToggle?.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = nextTheme;
  localStorage.setItem("procurement-theme", nextTheme);
});

sidebarToggle?.addEventListener("click", () => {
  sidebar?.classList.toggle("is-open");
});

collapseButton?.addEventListener("click", () => {
  sidebar?.classList.toggle("is-open");
});

moduleHeads.forEach((button) => {
  button.addEventListener("click", () => {
    const submenu = button.nextElementSibling;
    const isExpanded = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", String(!isExpanded));
    submenu?.toggleAttribute("hidden", isExpanded);
  });
});

openCreateModal?.addEventListener("click", () => {
  if (!canCreateInCurrentContext()) {
    showAlert("warning", "Akses dibatasi", `${getActiveRoleLabel()} tidak dapat membuat ${entitySingular.toLowerCase()}.`);
    return;
  }

  setCreateMode();
  showAlert(
    "warning",
    `Draft ${entitySingular} baru`,
    `Lengkapi form ${entitySingular.toLowerCase()} sesuai alur modul lalu simpan agar head baru masuk ke tabel utama.`
  );
  openManagedModal(createModalBackdrop, createModalCard, primaryField);
});

document.querySelectorAll("[data-edit='true']").forEach((button) => {
  button.addEventListener("click", () => {
    setEditMode(button.dataset);
    showStatusAlert(button.dataset);
    openManagedModal(createModalBackdrop, createModalCard, primaryField);
  });
});

document.querySelectorAll("[data-detail='true']").forEach(registerDetailButton);

[closeCreateModal, cancelCreateModal].forEach((button) => {
  button?.addEventListener("click", () => {
    resetCreateState();
    closeManagedModal(createModalBackdrop, createModalCard, requestForm);
  });
});

[closeDetailModal, cancelDetailModal].forEach((button) => {
  button?.addEventListener("click", () => {
    closeManagedModal(detailModalBackdrop, detailModalCard, null, { resetForm: false });
  });
});

[closeItemPicker, cancelItemPicker].forEach((button) => {
  button?.addEventListener("click", () => {
    closeManagedModal(itemPickerBackdrop, itemPickerCard, null, { resetForm: false });
  });
});

[closeDraftItemModal, cancelDraftItemModal].forEach((button) => {
  button?.addEventListener("click", () => {
    closeDraftItemDialog();
  });
});

[closeQuickItemModal, cancelQuickItemModal].forEach((button) => {
  button?.addEventListener("click", () => {
    quickItemForm?.reset();
    closeManagedModal(quickItemBackdrop, quickItemCard, quickItemForm);
  });
});

createModalBackdrop?.addEventListener("click", (event) => {
  if (event.target === createModalBackdrop) {
    resetCreateState();
    closeManagedModal(createModalBackdrop, createModalCard, requestForm);
  }
});

detailModalBackdrop?.addEventListener("click", (event) => {
  if (event.target === detailModalBackdrop) {
    closeManagedModal(detailModalBackdrop, detailModalCard, null, { resetForm: false });
  }
});

detailModalCard?.addEventListener("click", (event) => {
  const editDraftButton = event.target.closest("[data-edit-draft-record]");
  if (editDraftButton) {
    startDraftEdit(editDraftButton.dataset.editDraftRecord);
    return;
  }

  const quoteSelectButton = event.target.closest("[data-toggle-detail-quote-selected]");
  if (quoteSelectButton && detailViewType === "procurement-penawaran") {
    toggleDetailQuoteSelected(quoteSelectButton.dataset.approvalCode, Number(quoteSelectButton.dataset.toggleDetailQuoteSelected));
    return;
  }

  const approvalButton = event.target.closest("[data-approval-action]");
  if (!approvalButton) {
    return;
  }

  if (["pengajuan-barang", "pengajuan-jasa"].includes(detailViewType)) {
    handlePengajuanApprovalAction(approvalButton.dataset.approvalAction, approvalButton.dataset.approvalCode);
    return;
  }

  if (detailViewType === "procurement-penawaran") {
    handlePenawaranApprovalAction(approvalButton.dataset.approvalAction, approvalButton.dataset.approvalCode);
    return;
  }

  if (detailViewType === "procurement-po") {
    handlePoApprovalAction(approvalButton.dataset.approvalAction, approvalButton.dataset.approvalCode);
  }
});

itemPickerBackdrop?.addEventListener("click", (event) => {
  if (event.target === itemPickerBackdrop) {
    closeManagedModal(itemPickerBackdrop, itemPickerCard, null, { resetForm: false });
  }
});

draftItemBackdrop?.addEventListener("click", (event) => {
  if (event.target === draftItemBackdrop) {
    closeDraftItemDialog();
  }
});

serviceItemBackdrop?.addEventListener("click", (event) => {
  if (event.target === serviceItemBackdrop) {
    closeServiceItemDialog();
  }
});

quoteItemBackdrop?.addEventListener("click", (event) => {
  if (event.target === quoteItemBackdrop) {
    closeQuoteItemDialog();
  }
});

requestPickerBackdrop?.addEventListener("click", (event) => {
  if (event.target === requestPickerBackdrop) {
    closeManagedModal(requestPickerBackdrop, requestPickerCard, null, { resetForm: false });
  }
});

poRequestPickerBackdrop?.addEventListener("click", (event) => {
  if (event.target === poRequestPickerBackdrop) {
    closeManagedModal(poRequestPickerBackdrop, poRequestPickerCard, null, { resetForm: false });
  }
});

poItemPickerBackdrop?.addEventListener("click", (event) => {
  if (event.target === poItemPickerBackdrop) {
    selectedPoOfferIndexes = new Set();
    renderPoOfferPicker();
    closeManagedModal(poItemPickerBackdrop, poItemPickerCard, null, { resetForm: false });
  }
});

quickItemBackdrop?.addEventListener("click", (event) => {
  if (event.target === quickItemBackdrop) {
    quickItemForm?.reset();
    closeManagedModal(quickItemBackdrop, quickItemCard, quickItemForm);
  }
});

requestForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!requestForm.reportValidity()) {
    return;
  }

  if (detailViewType === "pengajuan-barang") {
    submitPengajuanBarang();
    return;
  }

  if (detailViewType === "pengajuan-jasa") {
    submitPengajuanJasa();
    return;
  }

  submitGenericForm();
});

openItemPickerButton?.addEventListener("click", () => {
  renderItemPicker(itemPickerSearch?.value || "");
  openManagedModal(itemPickerBackdrop, itemPickerCard, itemPickerSearch);
});

itemPickerSearch?.addEventListener("input", (event) => {
  renderItemPicker(event.target.value);
});

itemPickerList?.addEventListener("click", (event) => {
  const selectButton = event.target.closest("[data-select-item]");
  if (!selectButton) {
    return;
  }

  const selectedItem = masterItems.find((item) => item.code === selectButton.dataset.selectItem);
  if (!selectedItem) {
    return;
  }

  applySelectedItem(selectedItem);
  closeManagedModal(itemPickerBackdrop, itemPickerCard, null, { resetForm: false });
});

openQuickItemModalButton?.addEventListener("click", () => {
  quickItemForm?.reset();
  openManagedModal(
    quickItemBackdrop,
    quickItemCard,
    quickItemForm?.querySelector("input[name='name']")
  );
});

quickItemForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!quickItemForm.reportValidity()) {
    return;
  }

  const formData = new FormData(quickItemForm);
  const code = getNextItemCode();

  const item = {
    code,
    name: String(formData.get("name") || "").trim(),
    category: String(formData.get("category") || "").trim(),
    unit: String(formData.get("unit") || "").trim(),
    brand: String(formData.get("brand") || "").trim(),
    type: String(formData.get("type") || "").trim(),
    classification: "non_aset",
    status: "usulan",
    editableMasterFields: true
  };

  masterItems = [item, ...masterItems];
  applySelectedItem(item);
  renderItemPicker(itemPickerSearch?.value || "");

  quickItemForm.reset();
  closeManagedModal(quickItemBackdrop, quickItemCard, quickItemForm);
  closeManagedModal(itemPickerBackdrop, itemPickerCard, null, { resetForm: false });
});

openDraftItemModalButton?.addEventListener("click", () => {
  openDraftItemDialog();
});

draftItemsTableBody?.addEventListener("click", (event) => {
  const editButton = event.target.closest("[data-edit-draft-item]");
  if (editButton) {
    openDraftItemDialog(Number(editButton.dataset.editDraftItem));
    return;
  }

  const deleteButton = event.target.closest("[data-remove-draft-item]");
  if (deleteButton) {
    removeDraftItem(Number(deleteButton.dataset.removeDraftItem));
  }
});

draftItemForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  saveDraftItem();
});

openServiceItemModalButton?.addEventListener("click", () => {
  openServiceItemDialog();
});

serviceItemsTableBody?.addEventListener("click", (event) => {
  const editButton = event.target.closest("[data-edit-service-item]");
  if (editButton) {
    openServiceItemDialog(Number(editButton.dataset.editServiceItem));
    return;
  }

  const deleteButton = event.target.closest("[data-remove-service-item]");
  if (deleteButton) {
    removeServiceItem(Number(deleteButton.dataset.removeServiceItem));
  }
});

serviceItemForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  saveServiceItem();
});

closeServiceItemModal?.addEventListener("click", closeServiceItemDialog);
cancelServiceItemModal?.addEventListener("click", closeServiceItemDialog);

openQuoteItemModalButton?.addEventListener("click", () => {
  if (detailViewType === "procurement-penawaran" && !String(getField("requestCode")?.value || "").trim()) {
    showAlert("warning", "Pilih pengajuan dulu", "Pilih no pengajuan sebelum menambahkan item penawaran.");
    openRequestPickerModalButton?.focus();
    return;
  }

  openQuoteItemDialog();
});

quoteItemsTableBody?.addEventListener("click", (event) => {
  const taxToggle = event.target.closest("[data-toggle-quote-tax]");
  if (taxToggle) {
    toggleQuoteTax(Number(taxToggle.dataset.toggleQuoteTax));
    return;
  }

  const selectedToggle = event.target.closest("[data-toggle-quote-selected]");
  if (selectedToggle) {
    toggleQuoteSelected(Number(selectedToggle.dataset.toggleQuoteSelected));
    return;
  }

  const editButton = event.target.closest("[data-edit-quote-item]");
  if (editButton) {
    openQuoteItemDialog(Number(editButton.dataset.editQuoteItem));
    return;
  }

  const deleteButton = event.target.closest("[data-remove-quote-item]");
  if (deleteButton) {
    removeQuoteItem(Number(deleteButton.dataset.removeQuoteItem));
  }
});

quoteItemForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  saveQuoteItem();
});

closeQuoteItemModal?.addEventListener("click", closeQuoteItemDialog);
cancelQuoteItemModal?.addEventListener("click", closeQuoteItemDialog);

openRequestPickerModalButton?.addEventListener("click", () => {
  filterRequestPicker("");
  openManagedModal(requestPickerBackdrop, requestPickerCard, requestPickerSearch);
});

[closeRequestPickerModal, cancelRequestPickerModal].forEach((button) => {
  button?.addEventListener("click", () => {
    closeManagedModal(requestPickerBackdrop, requestPickerCard, null, { resetForm: false });
  });
});

requestPickerSearch?.addEventListener("input", (event) => {
  filterRequestPicker(event.target.value);
});

requestPickerList?.addEventListener("click", (event) => {
  const selectedRow = event.target.closest("[data-select-request]");
  if (!selectedRow) {
    return;
  }

  setFieldValue(getField("requestCode"), selectedRow.dataset.selectRequest || "");
  selectedRequestNeed = selectedRow.dataset.need || "";
  selectedRequestItems = getRequestDetailItems(selectedRow.dataset.selectRequest || "");
  draftQuoteItems = [];
  renderQuoteItems();
  closeManagedModal(requestPickerBackdrop, requestPickerCard, null, { resetForm: false });
});

openPoRequestPickerModalButton?.addEventListener("click", () => {
  filterPoRequestPicker("");
  openManagedModal(poRequestPickerBackdrop, poRequestPickerCard, poRequestPickerSearch);
});

[closePoRequestPickerModal, cancelPoRequestPickerModal].forEach((button) => {
  button?.addEventListener("click", () => {
    closeManagedModal(poRequestPickerBackdrop, poRequestPickerCard, null, { resetForm: false });
  });
});

poRequestPickerSearch?.addEventListener("input", (event) => {
  filterPoRequestPicker(event.target.value);
});

poRequestPickerList?.addEventListener("click", (event) => {
  const selectedRow = event.target.closest("[data-select-po-offer-source]");
  if (!selectedRow) {
    return;
  }

  setFieldValue(getField("offerCode"), selectedRow.dataset.selectPoOfferSource || "");
  setFieldValue(getField("vendor"), selectedRow.dataset.vendor || "");
  selectedPoOffers = getPoOffersForRequest(selectedRow);
  selectedPoOfferIndexes = new Set();
  draftPoItems = [];
  renderPoItems();
  renderPoOfferPicker();
  closeManagedModal(poRequestPickerBackdrop, poRequestPickerCard, null, { resetForm: false });
});

openPoItemModalButton?.addEventListener("click", () => {
  selectedPoOffers = getSelectedPoOffers();
  selectedPoOfferIndexes = new Set();
  setFieldValue(poOfferPickerSearch, "");
  setFieldValue(poOfferPaymentFilter, "");
  renderPoOfferPicker();
  openManagedModal(poItemPickerBackdrop, poItemPickerCard, null);
});

[closePoItemPickerModal, cancelPoItemPickerModal].forEach((button) => {
  button?.addEventListener("click", () => {
    selectedPoOfferIndexes = new Set();
    renderPoOfferPicker();
    closeManagedModal(poItemPickerBackdrop, poItemPickerCard, null, { resetForm: false });
  });
});

poOfferPickerList?.addEventListener("change", (event) => {
  const checkbox = event.target.closest("[data-toggle-po-offer]");
  if (!checkbox) {
    return;
  }

  const index = Number(checkbox.dataset.togglePoOffer);
  if (!Number.isInteger(index)) {
    return;
  }

  if (checkbox.checked) {
    selectedPoOfferIndexes.add(index);
  } else {
    selectedPoOfferIndexes.delete(index);
  }
});

poOfferPickerSearch?.addEventListener("input", renderPoOfferPicker);
poOfferPaymentFilter?.addEventListener("change", renderPoOfferPicker);

confirmPoItemPickerModal?.addEventListener("click", () => {
  if (addSelectedPoOffers()) {
    closeManagedModal(poItemPickerBackdrop, poItemPickerCard, null, { resetForm: false });
  }
});

poItemsTableBody?.addEventListener("click", (event) => {
  const deleteButton = event.target.closest("[data-remove-po-item]");
  if (deleteButton) {
    removePoItem(Number(deleteButton.dataset.removePoItem));
  }
});

dismissAlert?.addEventListener("click", () => {
  if (inlineAlert) {
    inlineAlert.hidden = true;
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeAllModals();

    if (inlineAlert) {
      inlineAlert.hidden = true;
    }
  }
});

populateContextDefaults();
renderItemPicker();

function renderRoleSwitcher() {
  if (!topbarRight || document.getElementById("roleSwitcher")) {
    return;
  }

  const roleSelect = document.createElement("label");
  roleSelect.className = "role-switcher";
  roleSelect.innerHTML = `
    <span>Role</span>
    <select id="roleSwitcher" aria-label="Pilih role prototype">
      ${roleOptions
        .map(
          (role) => `
            <option value="${escapeHtml(role.value)}"${role.value === activeRole ? " selected" : ""}>
              ${escapeHtml(role.label)}
            </option>
          `
        )
        .join("")}
    </select>
  `;

  topbarRight.prepend(roleSelect);
  roleSelect.querySelector("select")?.addEventListener("change", (event) => {
    activeRole = event.target.value;
    localStorage.setItem("procurement-active-role", activeRole);
    applyRoleAccess();

    if (activeDetailCode && detailRecords[activeDetailCode] && isModalOpen(detailModalBackdrop)) {
      renderDetailModal(detailRecords[activeDetailCode], activeDetailCode);
    }

    showAlert("warning", "Role aktif berubah", `Prototype sekarang dilihat sebagai ${getActiveRoleLabel()}.`);
  });
}

function getActiveRoleLabel() {
  return roleOptions.find((role) => role.value === activeRole)?.label || "Pemohon";
}

function getRoleInitials() {
  const role = getActiveRoleLabel();
  return role
    .split(/[\s.]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function applyRoleAccess() {
  root.dataset.activeRole = activeRole;

  if (avatarPhoto) {
    avatarPhoto.textContent = getRoleInitials();
  }

  if (openCreateModal) {
    const canCreate = canCreateInCurrentContext();
    openCreateModal.disabled = !canCreate;
    openCreateModal.title = canCreate ? "" : `${getActiveRoleLabel()} tidak punya akses membuat data di halaman ini`;
  }
}

function canCreateInCurrentContext() {
  if (activeRole === "admin") {
    return true;
  }

  if (detailViewType === "pengajuan-barang" || detailViewType === "pengajuan-jasa") {
    return activeRole === "pemohon";
  }

  if (detailViewType === "procurement-pembelian" || detailViewType === "procurement-penawaran" || detailViewType === "procurement-po") {
    return activeRole === "purchasing";
  }

  return activeRole === "admin";
}

function registerDetailButton(button) {
  if (!button || button.dataset.boundDetail === "true") {
    return;
  }

  button.dataset.boundDetail = "true";
  button.addEventListener("click", () => {
    activeDetailCode = button.dataset.code || "";
    renderDetailModal(detailRecords[button.dataset.code], button.dataset.code);
    showStatusAlert(button.dataset);
    openManagedModal(detailModalBackdrop, detailModalCard);
  });
}

function setCreateMode() {
  editingRecordCode = "";

  if (createModalKicker) {
    createModalKicker.textContent = "Tambah";
  }

  if (createModalTitle) {
    createModalTitle.textContent = `Tambah ${entitySingular}`;
  }

  requestForm?.reset();
  formFields.forEach(resetField);
  draftRequestItems = [];
  draftItemEditIndex = -1;
  draftServiceItems = [];
  serviceItemEditIndex = -1;
  draftQuoteItems = [];
  quoteItemEditIndex = -1;
  selectedRequestNeed = "";
  selectedRequestItems = [];
  selectedPoOffers = [];
  draftPoItems = [];
  selectedPoOfferIndexes = new Set();
  clearSelectedItem();
  populateContextDefaults();

  if (primaryField) {
    primaryField.value = getPrimaryDraftValue();
  }

  applyCreateDefaults();
  renderDraftItems();
  renderServiceItems();
  renderQuoteItems();
  renderPoItems();
}

function setEditMode(data) {
  if (createModalKicker) {
    createModalKicker.textContent = "Edit";
  }

  if (createModalTitle) {
    createModalTitle.textContent = `Edit ${entitySingular}`;
  }

  formFields.forEach((field) => {
    const key = field.dataset.field;
    setFieldValue(field, data[key] || "");
  });

  populateContextDefaults();
}

function startDraftEdit(code) {
  const record = detailRecords[code];
  if (!record || !canEditDraftRecord(record)) {
    showAlert("warning", "Tidak bisa diedit", "Data hanya bisa diubah saat status masih draft.");
    return;
  }

  editingRecordCode = code;
  prepareCreateModalForEdit(record, code);
  closeManagedModal(detailModalBackdrop, detailModalCard, null, { resetForm: false });
  openManagedModal(createModalBackdrop, createModalCard, primaryField || requestForm);
}

function canEditDraftRecord(record) {
  if (String(record?.header?.status || "") !== "draft") {
    return false;
  }

  if (activeRole === "admin") {
    return true;
  }

  if (detailViewType === "pengajuan-barang" || detailViewType === "pengajuan-jasa") {
    return activeRole === "pemohon";
  }

  if (detailViewType === "procurement-pembelian" || detailViewType === "procurement-penawaran" || detailViewType === "procurement-po") {
    return activeRole === "purchasing";
  }

  return false;
}

function prepareCreateModalForEdit(record, code) {
  requestForm?.reset();
  formFields.forEach(resetField);
  draftRequestItems = [];
  draftItemEditIndex = -1;
  draftServiceItems = [];
  serviceItemEditIndex = -1;
  draftQuoteItems = [];
  quoteItemEditIndex = -1;
  selectedRequestNeed = "";
  selectedRequestItems = [];
  selectedPoOffers = [];
  draftPoItems = [];
  selectedPoOfferIndexes = new Set();
  clearSelectedItem();

  if (createModalKicker) {
    createModalKicker.textContent = "Edit Draft";
  }

  if (createModalTitle) {
    createModalTitle.textContent = `Edit ${entitySingular}`;
  }

  fillDraftEditForm(record, code);
  renderDraftItems();
  renderServiceItems();
  renderQuoteItems();
  renderPoItems();
}

function fillDraftEditForm(record, code) {
  const { header } = record;

  if (detailViewType === "pengajuan-barang") {
    setFieldValue(getField("code"), header.code || code);
    setFieldValue(getField("division"), header.division || activeDivisionCode);
    setFieldValue(getField("priority"), header.priority || "");
    setFieldValue(getField("submitDate"), header.submitDate || formatDateDisplay(new Date()));
    setFieldValue(getField("targetDate"), parseDisplayDateToInput(header.targetDate));
    setFieldValue(getField("reason"), header.reason || "");
    draftRequestItems = (record.items || []).map((item) => ({ ...item }));
    return;
  }

  if (detailViewType === "pengajuan-jasa") {
    setFieldValue(getField("code"), header.code || code);
    setFieldValue(getField("division"), header.division || activeDivisionCode);
    setFieldValue(getField("requestType"), header.requestType || "jasa");
    setFieldValue(getField("serviceProcurementType"), header.serviceProcurementType || "");
    setFieldValue(getField("priority"), header.priority || "");
    setFieldValue(getField("submitDate"), header.submitDate || formatDateDisplay(new Date()));
    setFieldValue(getField("targetDate"), parseDisplayDateToInput(header.targetDate));
    setFieldValue(getField("reason"), header.reason || "");
    setFieldValue(getField("serviceNeed"), header.serviceNeed || "");
    draftServiceItems = (record.services || []).map((item) => ({ ...item }));
    return;
  }

  if (detailViewType === "procurement-pembelian") {
    setFieldValue(getField("code"), header.code || code);
    setFieldValue(getField("requestCode"), header.requestCode || "");
    setFieldValue(getField("division"), header.division || "");
    setFieldValue(getField("pic"), header.pic || "");
    setFieldValue(getField("orderType"), header.orderType || "");
    setFieldValue(getField("targetDate"), parseDisplayDateToInput(header.targetDate));
    setFieldValue(getField("need"), header.need || "");
    setFieldValue(getField("notes"), header.notes || "");
    return;
  }

  if (detailViewType === "procurement-penawaran") {
    setFieldValue(getField("requestCode"), header.requestCode || code);
    setFieldValue(getField("quoteCode"), header.quoteCode || "");
    setFieldValue(getField("quoteDate"), header.quoteDate || formatDateDisplay(new Date()));
    selectedRequestNeed = header.need || "";
    selectedRequestItems = getRequestDetailItems(header.requestCode || code);
    draftQuoteItems = (record.quotes || []).map((item) => ({ ...item }));
    return;
  }

  if (detailViewType === "procurement-po") {
    setFieldValue(getField("code"), header.code || code);
    setFieldValue(getField("vendor"), header.vendor || "");
    setFieldValue(getField("poDate"), header.poDate || formatDateDisplay(new Date()));
    setFieldValue(getField("notes"), header.notes || "");
    draftPoItems = (record.items || []).map((item) => ({ ...item }));
  }
}

function setFieldValue(field, value) {
  if (!field) {
    return;
  }

  field.value = value;
}

function setFieldReadOnly(field, readOnly) {
  if (!field) {
    return;
  }

  field.readOnly = readOnly;
}

function resetField(field) {
  if (!field) {
    return;
  }

  if (field.tagName === "SELECT") {
    field.selectedIndex = 0;
    return;
  }

  field.value = "";
}

function populateContextDefaults() {
  const today = new Date();
  const referenceExample = getNextRequestReference();
  const previousCodes = Object.keys(detailRecords).slice(0, 2);

  if (autoDivisionField) {
    autoDivisionField.value = activeDivisionCode;
  }

  if (autoSubmitDateField) {
    autoSubmitDateField.value = formatDateDisplay(today);
  }

  if (primaryField && String(primaryField.getAttribute("placeholder") || "").includes("/PP/")) {
    primaryField.placeholder = referenceExample;
  }

  if (codeHintNode) {
    const previousText = previousCodes.length
      ? ` Referensi sebelumnya: ${previousCodes.join(", ")}.`
      : "";
    codeHintNode.textContent = `Format referensi: ${referenceExample}.${previousText}`;
  }
}

function clearSelectedItem() {
  if (detailViewType !== "pengajuan-barang") {
    return;
  }

  ["itemName", "itemCode", "itemCategory", "itemUnit", "itemClassification", "itemBrand", "itemType"].forEach(
    (fieldName) => {
      const field = getField(fieldName);
      if (field) {
        field.value = "";
      }
    }
  );

  ["qty", "attachment", "notes"].forEach((fieldName) => {
    const field = getField(fieldName);
    if (field) {
      field.value = "";
    }
  });

  applyDraftItemFieldRules(null, { isEditing: false });
}

function applySelectedItem(item) {
  setFieldValue(getField("itemName"), item.name);
  setFieldValue(getField("itemCode"), item.code);
  setFieldValue(getField("itemCategory"), item.category);
  setFieldValue(getField("itemUnit"), item.unit);
  setFieldValue(getField("itemClassification"), item.classification);
  setFieldValue(getField("itemBrand"), item.brand || "-");
  setFieldValue(getField("itemType"), item.type || "-");

  if (selectedItemSummary) {
    selectedItemSummary.innerHTML = `
      <strong>${escapeHtml(item.name)}</strong>
      <p>${escapeHtml(item.code)} • ${escapeHtml(item.category)} • ${escapeHtml(
      item.brand || "-"
    )} • ${escapeHtml(item.type || "-")} • status ${escapeHtml(item.status)}</p>
    `;
  }

  applyDraftItemFieldRules(item, { isEditing: draftItemEditIndex >= 0 });
  getField("qty")?.focus();
}

function applyDraftItemFieldRules(item, options = {}) {
  const { isEditing = false } = options;
  const canEditMasterFields = Boolean(item?.editableMasterFields);
  const itemNameField = getField("itemName");
  const itemCodeField = getField("itemCode");
  const itemCategoryField = getField("itemCategory");
  const itemUnitField = getField("itemUnit");
  const itemClassificationField = getField("itemClassification");
  const itemBrandField = getField("itemBrand");
  const itemTypeField = getField("itemType");
  const qtyField = getField("qty");
  const attachmentField = getField("attachment");
  const notesField = getField("notes");

  setFieldReadOnly(itemNameField, !canEditMasterFields);
  setFieldReadOnly(itemCodeField, true);
  setFieldReadOnly(itemCategoryField, !canEditMasterFields);
  setFieldReadOnly(itemUnitField, !canEditMasterFields);
  setFieldReadOnly(itemClassificationField, !canEditMasterFields);
  setFieldReadOnly(itemBrandField, !canEditMasterFields);
  setFieldReadOnly(itemTypeField, !canEditMasterFields);
  setFieldReadOnly(qtyField, false);
  setFieldReadOnly(attachmentField, isEditing && !canEditMasterFields);
  setFieldReadOnly(notesField, false);

  if (openItemPickerButton) {
    openItemPickerButton.disabled = isEditing && !canEditMasterFields;
  }
}

function renderItemPicker(query = "") {
  if (!itemPickerList) {
    return;
  }

  const normalizedQuery = query.trim().toLowerCase();
  const filteredItems = masterItems.filter((item) => {
    const haystack = [item.code, item.name, item.category, item.classification, item.brand, item.type]
      .join(" ")
      .toLowerCase();
    return haystack.includes(normalizedQuery);
  });

  if (!filteredItems.length) {
    itemPickerList.innerHTML = `
      <div class="reference-empty">
        <strong>Barang tidak ditemukan</strong>
        <p>Coba kata kunci lain atau gunakan tombol tambah barang baru.</p>
      </div>
    `;
    return;
  }

  itemPickerList.innerHTML = filteredItems
    .map(
      (item) => `
        <div class="reference-card">
          <div class="reference-card-head">
            <div class="reference-card-title">
              <strong>${escapeHtml(item.name)}</strong>
              <span>${escapeHtml(item.code)} • ${escapeHtml(item.category)} • ${escapeHtml(
        item.brand || "-"
      )}</span>
            </div>
            <button class="table-action" type="button" data-select-item="${escapeHtml(item.code)}">Pilih</button>
          </div>
          <div class="reference-card-meta">
            <div class="tag-row">
              <span class="reference-meta-chip">${escapeHtml(item.unit)}</span>
              <span class="reference-meta-chip">${escapeHtml(item.classification)}</span>
              <span class="reference-meta-chip">${escapeHtml(item.type || "-")}</span>
            </div>
            <span class="status-chip ${getStatusChipClass(item.status)}">${escapeHtml(item.status)}</span>
          </div>
        </div>
      `
    )
    .join("");
}

function filterRequestPicker(query = "") {
  if (!requestPickerList) {
    return;
  }

  const normalizedQuery = String(query || "").trim().toLowerCase();
  Array.from(requestPickerList.querySelectorAll("[data-select-request]")).forEach((row) => {
    const haystack = [
      row.dataset.selectRequest,
      row.dataset.need,
      row.dataset.division,
      row.dataset.date
    ]
      .join(" ")
      .toLowerCase();
    row.hidden = Boolean(normalizedQuery && !haystack.includes(normalizedQuery));
  });
}

function getRequestDetailItems(requestCode) {
  const detailMap = {
    "2026/PP/GA/07/0016": [
      { code: "BRG-0021", name: "Kursi Kerja Ergonomis", qty: "6", unit: "Pcs" }
    ],
    "2026/PP/PUR/07/0009": [
      { code: "JASA-0009", name: "Maintenance Jaringan Berkala", qty: "1", unit: "Paket" }
    ],
    "2026/PP/IT/07/0004": [
      { code: "BRG-0044", name: "Access Point Dual Band", qty: "4", unit: "Unit" },
      { code: "BRG-0045", name: "Managed Switch 24 Port", qty: "2", unit: "Unit" }
    ],
    "2026/PP/OPS/07/0020": [
      { code: "BRG-0001", name: "Laptop Operasional", qty: "3", unit: "Unit" }
    ]
  };

  return detailMap[requestCode] || [];
}

function filterPoRequestPicker(query = "") {
  if (!poRequestPickerList) {
    return;
  }

  const normalizedQuery = String(query || "").trim().toLowerCase();
  Array.from(poRequestPickerList.querySelectorAll("[data-select-po-offer-source]")).forEach((row) => {
    const haystack = [
      row.dataset.selectPoOfferSource,
      row.dataset.requestCode,
      row.dataset.vendor,
      row.dataset.price,
      row.dataset.delivery
    ]
      .join(" ")
      .toLowerCase();
    row.hidden = Boolean(normalizedQuery && !haystack.includes(normalizedQuery));
  });
}

function getPoOffersForRequest(row) {
  const offerCode = row.dataset.selectPoOfferSource || "";
  const baseOffer = {
    quoteCode: offerCode,
    requestCode: row.dataset.requestCode || "",
    vendor: row.dataset.vendor || "",
    price: row.dataset.price || "",
    delivery: row.dataset.delivery || "-",
    leadTime: row.dataset.leadTime || "-",
    note: "Dari penawaran yang sudah disetujui."
  };

  const offerMap = {
    "PNW-2026-0034": [
      baseOffer,
      {
        quoteCode: "PNW-2026-0035",
        requestCode: row.dataset.requestCode || "",
        vendor: "PT Infrastruktur Digital",
        price: "Rp34.100.000",
        delivery: "dikirim_vendor",
        leadTime: "2026-07-24",
        note: "Data barang terpilih dari penawaran yang sudah disetujui."
      },
      {
        quoteCode: "PNW-2026-0036",
        requestCode: row.dataset.requestCode || "",
        vendor: "PT Sinar Network",
        price: "Rp33.250.000",
        delivery: "ekspedisi",
        leadTime: "2026-07-25",
        note: "Data barang terpilih dari penawaran yang sudah disetujui."
      }
    ],
    "PNW-2026-0041": [
      baseOffer,
      {
        quoteCode: "PNW-2026-0042",
        requestCode: row.dataset.requestCode || "",
        vendor: "PT Office Hub",
        price: "Rp7.450.000",
        delivery: "dikirim_vendor",
        leadTime: "2026-07-22",
        note: "Data barang terpilih dari penawaran yang sudah disetujui."
      },
      {
        quoteCode: "PNW-2026-0043",
        requestCode: row.dataset.requestCode || "",
        vendor: "CV Karya Interior",
        price: "Rp7.300.000",
        delivery: "diambil",
        leadTime: "2026-07-21",
        note: "Data barang terpilih dari penawaran yang sudah disetujui."
      }
    ]
  };

  return offerMap[offerCode] || [baseOffer];
}

function getSelectedPoOffers() {
  return [
    {
      quoteCode: "PNW-2026-0034",
      requestCode: "2026/PP/IT/07/0004",
      itemName: "Access Point Dual Band",
      qty: "4",
      unit: "Unit",
      vendor: "PT NetCom",
      paymentMethod: "TOP-030",
      totalPrice: "Rp6.500.000",
      subtotal: "Rp26.000.000",
      note: "Penawaran berstatus terpilih."
    },
    {
      quoteCode: "PNW-2026-0034",
      requestCode: "2026/PP/IT/07/0004",
      itemName: "Managed Switch 24 Port",
      qty: "2",
      unit: "Unit",
      vendor: "PT NetCom",
      paymentMethod: "TOP-030",
      totalPrice: "Rp3.300.000",
      subtotal: "Rp6.600.000",
      note: "Penawaran berstatus terpilih."
    },
    {
      quoteCode: "PNW-2026-0041",
      requestCode: "2026/PP/GA/07/0016",
      itemName: "Kursi Kerja Ergonomis",
      qty: "6",
      unit: "Pcs",
      vendor: "PT Sarana Office",
      paymentMethod: "TOP-014",
      totalPrice: "Rp1.191.667",
      subtotal: "Rp7.150.002",
      note: "Penawaran berstatus terpilih."
    }
  ];
}

function submitPengajuanBarang() {
  const code = String(primaryField?.value || "").trim();
  const targetDateValue = String(getField("targetDate")?.value || "").trim();
  const isEditingDraft = Boolean(editingRecordCode);

  if (!code) {
    primaryField?.focus();
    return;
  }

  if (detailRecords[code] && code !== editingRecordCode) {
    showAlert("error", "No pengajuan sudah ada", "Gunakan nomor pengajuan lain yang belum dipakai.");
    primaryField?.focus();
    return;
  }

  if (!draftRequestItems.length) {
    showAlert(
      "error",
      "Daftar item masih kosong",
      "Tambahkan minimal satu item ke daftar pengajuan sebelum menyimpan head."
    );
    openDraftItemModalButton?.focus();
    return;
  }

  const record = {
    header: {
      code,
      division: String(getField("division")?.value || activeDivisionCode),
      requestType: String(getField("requestType")?.value || "barang"),
      priority: String(getField("priority")?.value || ""),
      submitDate: formatDateDisplay(new Date()),
      targetDate: formatDateInput(targetDateValue),
      reason: String(getField("reason")?.value || "").trim(),
      status: "draft",
      statusKind: "waiting"
    },
    items: draftRequestItems.map((item, index) => ({
      ...item,
      no: `${code}-${String(index + 1).padStart(2, "0")}`
    })),
    approval: [
      {
        kind: "warning",
        title: "Draft Pemohon",
        text: "Pengajuan baru disimpan dan menunggu submit ke alur approval berikutnya."
      }
    ]
  };

  if (isEditingDraft) {
    removeMainTableRow(editingRecordCode);
    if (editingRecordCode !== code) {
      delete detailRecords[editingRecordCode];
    }
  }

  detailRecords[code] = record;
  prependRequestRow({
    code,
    division: record.header.division,
    priority: record.header.priority,
    submitDate: record.header.submitDate,
    targetDate: record.header.targetDate,
    status: record.header.status
  });

  closeManagedModal(createModalBackdrop, createModalCard, requestForm, { resetForm: false });
  resetCreateState();
  showAlert(
    "success",
    isEditingDraft ? "Draft pengajuan barang diperbarui" : "Pengajuan barang tersimpan",
    `${code} sudah masuk ke tabel utama dan bisa dibuka lewat View.`
  );
}

function submitPengajuanJasa() {
  const code = String(primaryField?.value || "").trim();
  const targetDateValue = String(getField("targetDate")?.value || "").trim();
  const isEditingDraft = Boolean(editingRecordCode);

  if (!code) {
    primaryField?.focus();
    return;
  }

  if (detailRecords[code] && code !== editingRecordCode) {
    showAlert("error", "No pengajuan sudah ada", "Gunakan nomor pengajuan lain yang belum dipakai.");
    primaryField?.focus();
    return;
  }

  if (!draftServiceItems.length) {
    showAlert(
      "error",
      "Detail jasa masih kosong",
      "Tambahkan minimal satu detail jasa sebelum menyimpan pengajuan."
    );
    openServiceItemModalButton?.focus();
    return;
  }

  const record = {
    header: {
      code,
      division: String(getField("division")?.value || activeDivisionCode),
      requestType: String(getField("requestType")?.value || "jasa"),
      serviceProcurementType: String(getField("serviceProcurementType")?.value || ""),
      priority: String(getField("priority")?.value || ""),
      submitDate: formatDateDisplay(new Date()),
      targetDate: formatDateInput(targetDateValue),
      reason: String(getField("reason")?.value || "").trim(),
      serviceNeed: String(getField("serviceNeed")?.value || "").trim(),
      status: "draft",
      statusKind: "waiting"
    },
    services: draftServiceItems.map((item, index) => ({
      ...item,
      no: `${code}-J${String(index + 1).padStart(2, "0")}`
    })),
    approval: [
      {
        kind: "warning",
        title: "Pemohon",
        text: "Draft"
      }
    ]
  };

  if (isEditingDraft) {
    removeMainTableRow(editingRecordCode);
    if (editingRecordCode !== code) {
      delete detailRecords[editingRecordCode];
    }
  }

  detailRecords[code] = record;
  prependRequestRow({
    code,
    division: record.header.division,
    priority: record.header.priority,
    submitDate: record.header.submitDate,
    targetDate: record.header.targetDate,
    status: record.header.status
  });

  closeManagedModal(createModalBackdrop, createModalCard, requestForm, { resetForm: false });
  resetCreateState();
  showAlert(
    "success",
    isEditingDraft ? "Draft pengajuan jasa diperbarui" : "Pengajuan jasa tersimpan",
    `${code} sudah masuk ke tabel utama dan bisa dibuka lewat View.`
  );
}

function submitGenericForm() {
  const formData = new FormData(requestForm);
  const savedRef = String(primaryField?.value || "").trim() || "Draft baru";
  const isEditingDraft = Boolean(editingRecordCode);

  if (detailViewType === "procurement-pembelian") {
    if (detailRecords[savedRef] && savedRef !== editingRecordCode) {
      showAlert("error", "No procurement sudah ada", "Gunakan nomor procurement lain.");
      primaryField?.focus();
      return;
    }

    const status = "draft";
    const record = {
      header: {
        code: savedRef,
        requestCode: String(formData.get("requestCode") || "").trim() || "-",
        division: String(formData.get("division") || "").trim() || "-",
        pic: String(formData.get("pic") || "").trim() || "-",
        orderType: String(formData.get("orderType") || "").trim() || "-",
        targetDate: formatDateInput(String(formData.get("targetDate") || "").trim()),
        status,
        need: String(formData.get("need") || "").trim() || "-",
        notes: String(formData.get("notes") || "").trim() || "-"
      }
    };

    if (isEditingDraft) {
      removeMainTableRow(editingRecordCode);
      if (editingRecordCode !== savedRef) {
        delete detailRecords[editingRecordCode];
      }
    }

    detailRecords[savedRef] = record;
    prependProcurementPembelianRow(record);
  }

  if (detailViewType === "procurement-penawaran") {
    const quoteCode = String(formData.get("no_penawaran") || "").trim();
    if (!savedRef || savedRef === "Draft baru") {
      primaryField?.focus();
      return;
    }

    if (!quoteCode) {
      showAlert("error", "No penawaran wajib diisi", "Isi no penawaran atau gunakan referensi dari sistem.");
      getField("quoteCode")?.focus();
      return;
    }

    if (detailRecords[savedRef] && savedRef !== editingRecordCode) {
      showAlert("error", "Pengajuan sudah punya penawaran", "Gunakan pengajuan lain atau buka detail penawaran yang sudah ada.");
      primaryField?.focus();
      return;
    }

    const quoteCodeExists = Object.entries(detailRecords).some(
      ([code, record]) => code !== editingRecordCode && record.header?.quoteCode === quoteCode
    );
    if (quoteCodeExists) {
      showAlert("error", "No penawaran sudah ada", "Gunakan nomor penawaran lain.");
      getField("quoteCode")?.focus();
      return;
    }

    if (!draftQuoteItems.length) {
      showAlert("error", "Detail penawaran masih kosong", "Tambahkan minimal satu penawaran vendor sebelum menyimpan.");
      openQuoteItemModalButton?.focus();
      return;
    }

    if (!areAllRequestItemsQuoted(draftQuoteItems, selectedRequestItems)) {
      showAlert("error", "Item belum lengkap", "Setiap barang dari detail pengajuan harus memiliki minimal satu penawaran.");
      openQuoteItemModalButton?.focus();
      return;
    }

    const status = "draft";
    const record = {
      header: {
        quoteCode,
        requestCode: savedRef,
        need: selectedRequestNeed || "-",
        status
      },
      quotes: draftQuoteItems.map((item) => ({ ...item }))
    };

    if (isEditingDraft) {
      removeMainTableRow(editingRecordCode);
      if (editingRecordCode !== savedRef) {
        delete detailRecords[editingRecordCode];
      }
    }

    detailRecords[savedRef] = record;
    prependProcurementPenawaranRow(record);
  }

  if (detailViewType === "procurement-po") {
    if (!draftPoItems.length) {
      showAlert("error", "Detail PO masih kosong", "Tambahkan minimal satu detail dari penawaran terpilih.");
      openPoItemModalButton?.focus();
      return;
    }

    if (detailRecords[savedRef] && savedRef !== editingRecordCode) {
      showAlert("error", "No PO sudah ada", "Gunakan nomor PO lain.");
      primaryField?.focus();
      return;
    }

    const status = "draft";
    const record = {
      header: {
        code: savedRef,
        offerCode: getPoOfferSummary(draftPoItems),
        vendor: String(formData.get("nama_vendor") || "").trim() || "-",
        poDate: formatDateDisplay(new Date()),
        status,
        notes: String(formData.get("catatan") || "").trim() || "-"
      },
      items: draftPoItems.map((item) => ({ ...item }))
    };

    if (isEditingDraft) {
      removeMainTableRow(editingRecordCode);
      if (editingRecordCode !== savedRef) {
        delete detailRecords[editingRecordCode];
      }
    }

    detailRecords[savedRef] = record;
    prependProcurementPORow(record);
  }

  closeManagedModal(createModalBackdrop, createModalCard, requestForm, { resetForm: false });
  showAlert(
    "success",
    isEditingDraft ? "Draft berhasil diperbarui" : "Data berhasil disimpan",
    `${entityPlural} telah disimpan dan siap dipakai oleh modul terkait.`
  );
  resetCreateState();
}

function areAllRequestItemsQuoted(quotes = [], requestItems = []) {
  if (!requestItems.length) {
    return true;
  }

  return requestItems.every((item) => quotes.some((quote) => quote.itemCode === item.code));
}

function prependRequestRow({ code, division, priority, submitDate, targetDate, status }) {
  if (!mainTableBody) {
    return;
  }

  mainTableBody.querySelectorAll(".master-slave-row").forEach((row) => {
    row.classList.remove("is-active");
  });

  const row = document.createElement("tr");
  row.className = "master-slave-row is-active";
  row.innerHTML = `
    <td>${escapeHtml(code)}</td>
    <td>${escapeHtml(division)}</td>
    <td>${escapeHtml(priority)}</td>
    <td>${escapeHtml(submitDate)}</td>
    <td>${escapeHtml(targetDate)}</td>
    <td><span class="status-chip ${getStatusChipClass(status)}">${escapeHtml(status)}</span></td>
    <td>
      <button
        class="table-action"
        type="button"
        data-detail="true"
        data-code="${escapeHtml(code)}"
        data-status="${escapeHtml(status)}"
      >
        View
      </button>
    </td>
  `;

  mainTableBody.prepend(row);
  registerDetailButton(row.querySelector("[data-detail='true']"));
}

function handlePengajuanApprovalAction(action, code) {
  if (!["pengajuan-barang", "pengajuan-jasa"].includes(detailViewType) || !code) {
    return;
  }

  const record = detailRecords[code];
  if (!record || !canRunPengajuanAction(action, record.header.status)) {
    showAlert("warning", "Akses dibatasi", `${getActiveRoleLabel()} tidak dapat menjalankan aksi ini.`);
    return;
  }

  if (action === "submit_division") {
    movePengajuanStatus(record, "menunggu_persetujuan_divisi");
    showPengajuanActionResult(code, "Pengajuan dikirim", `${code} masuk ke approval Kepala Divisi dengan status pending.`);
    return;
  }

  if (action === "approve_division") {
    movePengajuanStatus(record, "menunggu_persetujuan_kepala_akunting");
    showPengajuanActionResult(code, "Pengajuan disetujui Kadiv", `${code} masuk ke approval Kepala Akunting.`);
    return;
  }

  if (action === "reject_division") {
    rejectPengajuan(record, "kepala_divisi");
    showPengajuanActionResult(code, "Pengajuan ditolak", `${code} dihentikan oleh Kepala Divisi.`);
    return;
  }

  if (action === "approve_head_accounting") {
    movePengajuanStatus(record, "siap_procurement");
    showPengajuanActionResult(code, "Pengajuan siap procurement", `${code} sudah dapat diproses Purchasing.`);
    return;
  }

  if (action === "reject_head_accounting") {
    rejectPengajuan(record, "kepala_akunting");
    showPengajuanActionResult(code, "Pengajuan ditolak", `${code} dihentikan oleh Kepala Akunting.`);
  }
}

function canRunPengajuanAction(action, status) {
  if (activeRole === "admin") {
    return true;
  }

  const actionRules = {
    submit_division: activeRole === "pemohon" && status === "draft",
    approve_division: activeRole === "kepala_divisi" && status === "menunggu_persetujuan_divisi",
    reject_division: activeRole === "kepala_divisi" && status === "menunggu_persetujuan_divisi",
    approve_head_accounting: activeRole === "kepala_akunting" && status === "menunggu_persetujuan_kepala_akunting",
    reject_head_accounting: activeRole === "kepala_akunting" && status === "menunggu_persetujuan_kepala_akunting"
  };

  return Boolean(actionRules[action]);
}

function movePengajuanStatus(record, status) {
  record.header.status = status;
  record.header.statusKind = "waiting";
}

function rejectPengajuan(record, rejectedStage) {
  record.header.status = "ditolak";
  record.header.statusKind = "danger";
  record.header.rejectedStage = rejectedStage;
}

function showPengajuanActionResult(code, title, message) {
  const record = detailRecords[code];
  updateRequestRowStatus(code, record.header.status);
  renderDetailModal(record, code);
  showAlert("success", title, message);
}

function handlePenawaranApprovalAction(action, code) {
  if (detailViewType !== "procurement-penawaran" || !code) {
    return;
  }

  const record = detailRecords[code];
  if (!record || !canRunPenawaranAction(action, record.header.status)) {
    showAlert("warning", "Akses dibatasi", `${getActiveRoleLabel()} tidak dapat menjalankan aksi ini.`);
    return;
  }

  if (action === "submit_purchasing") {
    record.header.status = "menunggu_persetujuan_purchasing";
    showPenawaranActionResult(code, "Penawaran diajukan", `${code} masuk ke approval Kepala Purchasing.`);
    return;
  }

  if (action === "approve_purchasing") {
    if (!areAllQuoteItemsSelected(record.quotes || [])) {
      showAlert("error", "Vendor belum lengkap", "Kepala Purchasing harus memilih satu vendor untuk setiap barang.");
      return;
    }

    record.header.status = "disetujui";
    record.quotes = record.quotes.map((quote) => ({
      ...quote,
      status: quote.selected ? "disetujui" : "ditolak"
    }));
    showPenawaranActionResult(code, "Penawaran disetujui", `${code} siap menjadi dasar pembuatan PO.`);
    return;
  }

  if (action === "reject_purchasing") {
    record.header.status = "draft";
    record.quotes = (record.quotes || []).map((quote) => ({
      ...quote,
      status: "direview"
    }));
    showPenawaranActionResult(code, "Penawaran dikembalikan", `${code} kembali menjadi draft dan dapat diedit Purchasing.`);
  }
}

function areAllQuoteItemsSelected(quotes = []) {
  const itemCodes = Array.from(new Set(quotes.map((quote) => quote.itemCode || quote.itemName).filter(Boolean)));
  return itemCodes.length > 0 && itemCodes.every((itemCode) =>
    quotes.some((quote) => (quote.itemCode || quote.itemName) === itemCode && quote.selected)
  );
}

function canRunPenawaranAction(action, status) {
  if (activeRole === "admin") {
    return true;
  }

  const actionRules = {
    submit_purchasing: activeRole === "purchasing" && ["draft", "proses_penawaran"].includes(status),
    approve_purchasing: activeRole === "kepala_purchasing" && status === "menunggu_persetujuan_purchasing",
    reject_purchasing: activeRole === "kepala_purchasing" && status === "menunggu_persetujuan_purchasing"
  };

  return Boolean(actionRules[action]);
}

function showPenawaranActionResult(code, title, message) {
  const record = detailRecords[code];
  updateRequestRowStatus(code, record.header.status);
  renderDetailModal(record, code);
  showAlert("success", title, message);
}

function handlePoApprovalAction(action, code) {
  if (detailViewType !== "procurement-po" || !code) {
    return;
  }

  const record = detailRecords[code];
  if (!record || !canRunPoAction(action, record.header.status)) {
    showAlert("warning", "Akses dibatasi", `${getActiveRoleLabel()} tidak dapat menjalankan aksi ini.`);
    return;
  }

  if (action === "submit_po") {
    record.header.status = "menunggu_persetujuan_purchasing";
    showPoActionResult(code, "PO diajukan", `${code} masuk ke approval Kepala Purchasing.`);
    return;
  }

  if (action === "approve_po") {
    record.header.status = "disetujui";
    showPoActionResult(code, "PO disetujui", `${code} sudah terbit dan detail PO terkunci.`);
    return;
  }

  if (action === "reject_po") {
    record.header.status = "dibatalkan";
    showPoActionResult(code, "PO dibatalkan", `${code} dihentikan oleh Kepala Purchasing.`);
  }
}

function canRunPoAction(action, status) {
  if (activeRole === "admin") {
    return true;
  }

  const actionRules = {
    submit_po: activeRole === "purchasing" && status === "draft",
    approve_po: activeRole === "kepala_purchasing" && status === "menunggu_persetujuan_purchasing",
    reject_po: activeRole === "kepala_purchasing" && status === "menunggu_persetujuan_purchasing"
  };

  return Boolean(actionRules[action]);
}

function showPoActionResult(code, title, message) {
  const record = detailRecords[code];
  updateRequestRowStatus(code, record.header.status);
  renderDetailModal(record, code);
  showAlert("success", title, message);
}

function updateRequestRowStatus(code, status) {
  if (!mainTableBody) {
    return;
  }

  const detailButton = Array.from(mainTableBody.querySelectorAll('[data-detail="true"]')).find(
    (button) => button.dataset.code === code
  );
  const row = detailButton?.closest("tr");
  if (!detailButton || !row) {
    return;
  }

  detailButton.dataset.status = status;
  const statusCell = row.querySelector("td:nth-last-child(2)");
  if (statusCell) {
    statusCell.innerHTML = `<span class="status-chip ${getStatusChipClass(status)}">${escapeHtml(status)}</span>`;
  }
}

function removeMainTableRow(code) {
  if (!mainTableBody || !code) {
    return;
  }

  const detailButton = Array.from(mainTableBody.querySelectorAll('[data-detail="true"]')).find(
    (button) => button.dataset.code === code
  );
  detailButton?.closest("tr")?.remove();
}

function prependProcurementPembelianRow(record) {
  if (!mainTableBody) {
    return;
  }

  mainTableBody.querySelectorAll(".master-slave-row").forEach((row) => {
    row.classList.remove("is-active");
  });

  const { header } = record;
  const row = document.createElement("tr");
  row.className = "master-slave-row is-active";
  row.innerHTML = `
    <td>${escapeHtml(header.code)}</td>
    <td>${escapeHtml(header.requestCode)}</td>
    <td>${escapeHtml(header.division)}</td>
    <td>${escapeHtml(header.pic)}</td>
    <td>${escapeHtml(header.orderType)}</td>
    <td><span class="status-chip ${getStatusChipClass(header.status)}">${escapeHtml(header.status)}</span></td>
    <td>
      <button class="table-action" type="button" data-detail="true" data-code="${escapeHtml(header.code)}" data-status="${escapeHtml(
        header.status
      )}">
        View
      </button>
    </td>
  `;

  mainTableBody.prepend(row);
  registerDetailButton(row.querySelector("[data-detail='true']"));
}

function prependProcurementPenawaranRow(record) {
  if (!mainTableBody) {
    return;
  }

  mainTableBody.querySelectorAll(".master-slave-row").forEach((row) => {
    row.classList.remove("is-active");
  });

  const { header } = record;
  const quotes = record.quotes || [];
  const bestQuote = quotes[0] || {};
  const row = document.createElement("tr");
  row.className = "master-slave-row is-active";
  row.innerHTML = `
    <td>${escapeHtml(header.quoteCode || "-")}</td>
    <td>${escapeHtml(header.requestCode)}</td>
    <td>${escapeHtml(header.need)}</td>
    <td>${escapeHtml(getQuoteSummary(quotes))}</td>
    <td>${escapeHtml(bestQuote.unitPrice || "-")}</td>
    <td><span class="status-chip ${getStatusChipClass(header.status)}">${escapeHtml(header.status)}</span></td>
    <td>
      <button class="table-action" type="button" data-detail="true" data-code="${escapeHtml(header.requestCode)}" data-status="${escapeHtml(header.status)}">
        View
      </button>
    </td>
  `;

  mainTableBody.prepend(row);
  registerDetailButton(row.querySelector("[data-detail='true']"));
}

function prependProcurementPORow(record) {
  if (!mainTableBody) {
    return;
  }

  mainTableBody.querySelectorAll(".master-slave-row").forEach((row) => {
    row.classList.remove("is-active");
  });

  const { header } = record;
  const row = document.createElement("tr");
  row.className = "master-slave-row is-active";
  row.innerHTML = `
    <td>${escapeHtml(header.code)}</td>
    <td>${escapeHtml(header.offerCode || getPoOfferSummary(record.items))}</td>
    <td>${escapeHtml(header.vendor)}</td>
    <td>${escapeHtml(header.poDate)}</td>
    <td>${escapeHtml(`${record.items?.length || 0} penawaran`)}</td>
    <td><span class="status-chip ${getStatusChipClass(header.status)}">${escapeHtml(header.status)}</span></td>
    <td>
      <button class="table-action" type="button" data-detail="true" data-code="${escapeHtml(header.code)}" data-status="${escapeHtml(
        header.status
      )}">
        View
      </button>
    </td>
  `;

  mainTableBody.prepend(row);
  registerDetailButton(row.querySelector("[data-detail='true']"));
}

function getPoOfferSummary(items = []) {
  const offerCodes = Array.from(new Set((items || []).map((item) => item.quoteCode).filter(Boolean)));
  if (!offerCodes.length) {
    return "-";
  }

  return offerCodes.length === 1 ? offerCodes[0] : `${offerCodes.length} penawaran`;
}

function getQuoteSummary(quotes = []) {
  const itemCount = new Set(quotes.map((quote) => quote.itemCode || quote.itemName).filter(Boolean)).size;
  const vendorCount = quotes.length;
  return `${itemCount || 0} item / ${vendorCount || 0} vendor`;
}

function resetCreateState() {
  editingRecordCode = "";
  requestForm?.reset();
  formFields.forEach(resetField);
  draftRequestItems = [];
  draftItemEditIndex = -1;
  draftServiceItems = [];
  serviceItemEditIndex = -1;
  draftQuoteItems = [];
  quoteItemEditIndex = -1;
  selectedRequestNeed = "";
  selectedRequestItems = [];
  selectedPoOffers = [];
  draftPoItems = [];
  selectedPoOfferIndexes = new Set();
  clearSelectedItem();
  populateContextDefaults();
  applyCreateDefaults();
  renderDraftItems();
  renderServiceItems();
  renderQuoteItems();
  renderPoItems();
}

function openManagedModal(backdrop, card, focusTarget) {
  if (!backdrop || !card || isModalOpen(backdrop)) {
    return;
  }

  backdrop.hidden = false;
  backdrop.setAttribute("aria-hidden", "false");
  card.setAttribute("aria-hidden", "false");
  root.classList.add("modal-open");
  focusTarget?.focus();
}

function closeManagedModal(backdrop, card, form, options = {}) {
  const { resetForm = true } = options;

  if (!backdrop || !card) {
    return;
  }

  backdrop.hidden = true;
  backdrop.setAttribute("aria-hidden", "true");
  card.setAttribute("aria-hidden", "true");

  if (resetForm) {
    form?.reset();
  }

  if (areAllModalsClosed()) {
    root.classList.remove("modal-open");
  }
}

function closeAllModals(options = {}) {
  selectedPoOfferIndexes = new Set();
  closeManagedModal(createModalBackdrop, createModalCard, requestForm, options);
  closeManagedModal(detailModalBackdrop, detailModalCard, null, { resetForm: false });
  closeManagedModal(draftItemBackdrop, draftItemCard, draftItemForm, options);
  closeManagedModal(serviceItemBackdrop, serviceItemCard, serviceItemForm, options);
  closeManagedModal(quoteItemBackdrop, quoteItemCard, quoteItemForm, options);
  closeManagedModal(requestPickerBackdrop, requestPickerCard, null, { resetForm: false });
  closeManagedModal(poRequestPickerBackdrop, poRequestPickerCard, null, { resetForm: false });
  closeManagedModal(poItemPickerBackdrop, poItemPickerCard, null, { resetForm: false });
  closeManagedModal(itemPickerBackdrop, itemPickerCard, null, { resetForm: false });
  closeManagedModal(quickItemBackdrop, quickItemCard, quickItemForm, options);
}

function areAllModalsClosed() {
  return [
    createModalBackdrop,
    detailModalBackdrop,
    draftItemBackdrop,
    serviceItemBackdrop,
    quoteItemBackdrop,
    requestPickerBackdrop,
    poRequestPickerBackdrop,
    poItemPickerBackdrop,
    itemPickerBackdrop,
    quickItemBackdrop
  ].every((backdrop) => !backdrop || backdrop.hidden);
}

function isModalOpen(backdrop) {
  return Boolean(backdrop && !backdrop.hidden);
}

function showStatusAlert(data) {
  const statusSource = data.status || data.divisionStatus || "";
  const status = statusSource.toLowerCase();

  if (status.includes("ditolak") || status.includes("nonaktif")) {
    showAlert(
      "error",
      `${entitySingular} bermasalah`,
      `Data ini berada di status ${statusSource || "ditolak"} dan perlu tindak lanjut sebelum bisa dipakai lagi.`
    );
    return;
  }

  if (
    status.includes("menunggu") ||
    status.includes("review") ||
    status.includes("diajukan") ||
    status.includes("usulan") ||
    status.includes("proses") ||
    status.includes("draft")
  ) {
    showAlert(
      "warning",
      `${entitySingular} masih diproses`,
      `Data ini berada di status ${statusSource || "draft"} dan masih menunggu tahap berikutnya.`
    );
    return;
  }

  showAlert(
    "success",
    `${entitySingular} aktif`,
    `Data utama siap dipakai sebagai head dan dapat diturunkan ke proses detail berikutnya.`
  );
}

function showAlert(kind, title, text) {
  if (!inlineAlert || !inlineAlertTitle || !inlineAlertText) {
    return;
  }

  inlineAlert.hidden = false;
  inlineAlert.dataset.kind = kind;
  inlineAlertTitle.textContent = title;
  inlineAlertText.textContent = text;
}

function parseJsonNode(node, fallback) {
  if (!node) {
    return fallback;
  }

  try {
    return JSON.parse(node.textContent);
  } catch (error) {
    return fallback;
  }
}

function renderDetailModal(record, code) {
  if (!detailModalBody || !detailModalTitle || !detailModalKicker || !detailModalCard) {
    return;
  }

  if (detailStatusActions) {
    detailStatusActions.innerHTML = "";
  }

  detailModalKicker.textContent = "Detail";
  detailModalTitle.textContent = code ? `Detail ${code}` : `Detail ${entitySingular}`;
  detailModalCard.classList.add("modal-card-wide");

  if (!record) {
    detailModalBody.innerHTML = `
      <section class="form-section">
        <div class="form-section-head">
          <strong>Data tidak ditemukan</strong>
          <p>Record detail belum tersedia untuk referensi ini.</p>
        </div>
      </section>
    `;
    return;
  }

  if (detailViewType === "pengajuan-barang") {
    detailModalBody.innerHTML = buildBarangDetailMarkup(record);
    renderPengajuanApprovalActions(record);
    return;
  }

  if (detailViewType === "pengajuan-jasa") {
    detailModalBody.innerHTML = buildJasaDetailMarkup(record);
    renderPengajuanApprovalActions(record);
    return;
  }

  if (detailViewType === "procurement-pembelian") {
    detailModalBody.innerHTML = buildProcurementPembelianMarkup(record);
    renderDraftEditActions(record);
    return;
  }

  if (detailViewType === "procurement-penawaran") {
    detailModalBody.innerHTML = buildProcurementPenawaranMarkup(record);
    renderPenawaranApprovalActions(record);
    return;
  }

  if (detailViewType === "procurement-po") {
    detailModalBody.innerHTML = buildProcurementPOMarkup(record);
    renderPoApprovalActions(record);
    return;
  }

  detailModalBody.innerHTML = `
    <section class="form-section">
      <div class="form-section-head">
        <strong>Detail tidak dikenali</strong>
        <p>Tipe detail view belum dikonfigurasi untuk halaman ini.</p>
      </div>
    </section>
  `;
}

function buildBarangDetailMarkup(record) {
  const status = String(record.header.status || "");
  const approvalRows = getPengajuanApprovalSteps(record)
    .map(
      (step) => `
        <div class="approval-step" data-kind="${escapeHtml(step.kind || "pending")}">
          <div class="approval-person">${escapeHtml(step.title)}</div>
          <div class="approval-track"><span class="approval-dot"></span></div>
          <div class="approval-state">${escapeHtml(step.text)}</div>
        </div>
      `
    )
    .join("");
  const itemRows = (record.items || [])
    .map(
      (item) => `
        <tr>
          <td>${escapeHtml(item.no)}</td>
          <td>${escapeHtml(item.code || "-")}</td>
          <td>${escapeHtml(item.name)}</td>
          <td>${escapeHtml(item.category || "-")}</td>
          <td>${escapeHtml(item.qty)}</td>
          <td>${escapeHtml(item.unit)}</td>
          <td>${escapeHtml(item.brand || "-")}</td>
          <td>${escapeHtml(item.type || "-")}</td>
          <td>${escapeHtml(item.classification || "-")}</td>
          <td>${escapeHtml(item.estimate)}</td>
          <td>${escapeHtml(item.attachment || "-")}</td>
          <td>${escapeHtml(item.notes)}</td>
        </tr>
      `
    )
    .join("");

  return `
    <div class="modal-detail-stack">
      <section class="approval-strip" aria-label="Alur approval">
        <div class="approval-flow approval-flow-horizontal">
          ${approvalRows}
        </div>
      </section>

      <section class="form-section">
        <div class="form-section-head">
          <strong>Data Pengajuan</strong>
        </div>
        <div class="detail-list">
          <div class="detail-row">
            <div class="detail-label">No Pengajuan</div>
            <div class="detail-value">${escapeHtml(record.header.code)}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Divisi</div>
            <div class="detail-value">${escapeHtml(record.header.division)}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Jenis Pengajuan</div>
            <div class="detail-value">${escapeHtml(record.header.requestType || "barang")}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Prioritas</div>
            <div class="detail-value">${escapeHtml(record.header.priority)}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Tanggal</div>
            <div class="detail-value">${escapeHtml(record.header.submitDate)}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Max Tgl Beli</div>
            <div class="detail-value">${escapeHtml(record.header.targetDate)}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Status</div>
            <div class="detail-value">
              <span class="status-chip ${getStatusChipClass(status)}">${escapeHtml(status)}</span>
            </div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Alasan</div>
            <div class="detail-value">${escapeHtml(record.header.reason)}</div>
          </div>
        </div>
      </section>

      <section class="form-section">
        <div class="form-section-head">
          <strong>Item Pengajuan</strong>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>No Detail</th>
                <th>Kode</th>
                <th>Barang</th>
                <th>Kategori</th>
                <th>Qty</th>
                <th>Satuan</th>
                <th>Merk</th>
                <th>Tipe</th>
                <th>Klasifikasi</th>
                <th>Estimasi</th>
                <th>Lampiran</th>
                <th>Catatan</th>
              </tr>
            </thead>
            <tbody>${itemRows}</tbody>
          </table>
        </div>
      </section>
    </div>
  `;
}

function getPengajuanApprovalSteps(record) {
  const status = String(record?.header?.status || "");

  if (status === "draft") {
    return [
      { kind: "warning", title: "Pemohon", text: "Draft" },
      { kind: "", title: "Kepala Divisi", text: "Menunggu" },
      { kind: "", title: "Kepala Akunting", text: "Menunggu" }
    ];
  }

  if (status === "menunggu_persetujuan_divisi") {
    return [
      { kind: "success", title: "Pemohon", text: "Dikirim" },
      { kind: "warning", title: "Kepala Divisi", text: "Pending" },
      { kind: "", title: "Kepala Akunting", text: "Menunggu" }
    ];
  }

  if (status === "menunggu_persetujuan_kepala_akunting") {
    return [
      { kind: "success", title: "Pemohon", text: "Dikirim" },
      { kind: "success", title: "Kepala Divisi", text: "Approved" },
      { kind: "warning", title: "Kepala Akunting", text: "Pending" }
    ];
  }

  if (status === "siap_procurement") {
    return [
      { kind: "success", title: "Pemohon", text: "Dikirim" },
      { kind: "success", title: "Kepala Divisi", text: "Approved" },
      { kind: "success", title: "Kepala Akunting", text: "Approved" }
    ];
  }

  if (status === "ditolak") {
    const rejectedStage = String(record?.header?.rejectedStage || "kepala_divisi");
    const rejectedByHeadAccounting = rejectedStage === "kepala_akunting";

    return [
      { kind: "success", title: "Pemohon", text: "Dikirim" },
      { kind: rejectedByHeadAccounting ? "success" : "error", title: "Kepala Divisi", text: rejectedByHeadAccounting ? "Approved" : "Ditolak" },
      { kind: rejectedByHeadAccounting ? "error" : "", title: "Kepala Akunting", text: rejectedByHeadAccounting ? "Ditolak" : "-" }
    ];
  }

  return [
    { kind: "review", title: "Pemohon", text: status || "-" },
    { kind: "", title: "Kepala Divisi", text: "-" },
    { kind: "", title: "Kepala Akunting", text: "-" }
  ];
}

function renderPengajuanApprovalActions(record) {
  if (!detailStatusActions) {
    return;
  }

  const status = String(record?.header?.status || "");
  const actions = getPengajuanActionsForRole(status);
  if (!["pengajuan-barang", "pengajuan-jasa"].includes(detailViewType)) {
    renderDraftEditActions(record);
    return;
  }

  detailStatusActions.innerHTML = [
    getDraftEditButton(record),
    ...actions.map(
      (action) => `
        <button
          class="${escapeHtml(action.variant)}"
          type="button"
          data-approval-action="${escapeHtml(action.action)}"
          data-approval-code="${escapeHtml(record.header.code)}"
        >
          ${escapeHtml(action.label)}
        </button>
      `
    )
  ].join("");
}

function renderDraftEditActions(record) {
  if (!detailStatusActions) {
    return;
  }

  detailStatusActions.innerHTML = getDraftEditButton(record);
}

function getDraftEditButton(record) {
  if (!canEditDraftRecord(record)) {
    return "";
  }

  const code = getRecordPrimaryCode(record);
  return `
    <button
      class="secondary-button"
      type="button"
      data-edit-draft-record="${escapeHtml(code)}"
    >
      Edit Draft
    </button>
  `;
}

function getRecordPrimaryCode(record) {
  return record?.header?.code || record?.header?.requestCode || activeDetailCode || "";
}

function renderActionButtons(record, actions) {
  const approvalCode = record?.header?.requestCode || record?.header?.code || activeDetailCode || "";
  return [
    getDraftEditButton(record),
    ...actions
    .map(
      (action) => `
        <button
          class="${escapeHtml(action.variant)}"
          type="button"
          data-approval-action="${escapeHtml(action.action)}"
          data-approval-code="${escapeHtml(approvalCode)}"
        >
          ${escapeHtml(action.label)}
        </button>
      `
    )
  ].join("");
}

function getPengajuanActionsForRole(status) {
  const allActions = {
    draft: [
      { action: "submit_division", label: "ajukan ke Kadiv", variant: "primary-button" }
    ],
    menunggu_persetujuan_divisi: [
      { action: "reject_division", label: "tolak", variant: "secondary-button danger-button" },
      { action: "approve_division", label: "setujui", variant: "primary-button" }
    ],
    menunggu_persetujuan_kepala_akunting: [
      { action: "reject_head_accounting", label: "tolak", variant: "secondary-button danger-button" },
      { action: "approve_head_accounting", label: "approve", variant: "primary-button" }
    ]
  };

  return (allActions[status] || []).filter((action) => canRunPengajuanAction(action.action, status));
}

function renderPenawaranApprovalActions(record) {
  if (!detailStatusActions) {
    return;
  }

  const status = String(record?.header?.status || "");
  const actions = getPenawaranActionsForRole(status);
  detailStatusActions.innerHTML = renderActionButtons(record, actions);
}

function getPenawaranActionsForRole(status) {
  const allActions = {
    draft: [
      { action: "submit_purchasing", label: "ajukan approval", variant: "primary-button" }
    ],
    proses_penawaran: [
      { action: "submit_purchasing", label: "ajukan approval", variant: "primary-button" }
    ],
    menunggu_persetujuan_purchasing: [
      { action: "reject_purchasing", label: "tolak", variant: "secondary-button danger-button" },
      { action: "approve_purchasing", label: "approve", variant: "primary-button" }
    ]
  };

  return (allActions[status] || []).filter((action) => canRunPenawaranAction(action.action, status));
}

function getPenawaranApprovalSteps(record) {
  const status = String(record?.header?.status || "");

  if (status === "draft" || status === "proses_penawaran") {
    return [
      { kind: "warning", title: "Purchasing", text: status === "draft" ? "Draft" : "Proses" },
      { kind: "", title: "Kepala Purchasing", text: "Menunggu" }
    ];
  }

  if (status === "menunggu_persetujuan_purchasing") {
    return [
      { kind: "success", title: "Purchasing", text: "Diajukan" },
      { kind: "warning", title: "Kepala Purchasing", text: "Pending" }
    ];
  }

  if (status === "disetujui") {
    return [
      { kind: "success", title: "Purchasing", text: "Diajukan" },
      { kind: "success", title: "Kepala Purchasing", text: "Approved" }
    ];
  }

  if (status === "ditolak") {
    return [
      { kind: "success", title: "Purchasing", text: "Diajukan" },
      { kind: "error", title: "Kepala Purchasing", text: "Ditolak" }
    ];
  }

  return [
    { kind: "review", title: "Purchasing", text: status || "-" },
    { kind: "", title: "Kepala Purchasing", text: "-" }
  ];
}

function renderPoApprovalActions(record) {
  if (!detailStatusActions) {
    return;
  }

  const status = String(record?.header?.status || "");
  const actions = getPoActionsForRole(status);
  detailStatusActions.innerHTML = renderActionButtons(record, actions);
}

function getPoActionsForRole(status) {
  const allActions = {
    draft: [
      { action: "submit_po", label: "ajukan approval", variant: "primary-button" }
    ],
    menunggu_persetujuan_purchasing: [
      { action: "reject_po", label: "tolak", variant: "secondary-button danger-button" },
      { action: "approve_po", label: "approve", variant: "primary-button" }
    ]
  };

  return (allActions[status] || []).filter((action) => canRunPoAction(action.action, status));
}

function getPoApprovalSteps(record) {
  const status = String(record?.header?.status || "");

  if (status === "draft") {
    return [
      { kind: "warning", title: "Purchasing", text: "Draft" },
      { kind: "", title: "Kepala Purchasing", text: "Menunggu" }
    ];
  }

  if (status === "menunggu_persetujuan_purchasing") {
    return [
      { kind: "success", title: "Purchasing", text: "Diajukan" },
      { kind: "warning", title: "Kepala Purchasing", text: "Pending" }
    ];
  }

  if (status === "disetujui" || status === "selesai") {
    return [
      { kind: "success", title: "Purchasing", text: "Diajukan" },
      { kind: "success", title: "Kepala Purchasing", text: status === "selesai" ? "Selesai" : "Approved" }
    ];
  }

  if (status === "dibatalkan") {
    return [
      { kind: "success", title: "Purchasing", text: "Diajukan" },
      { kind: "error", title: "Kepala Purchasing", text: "Ditolak" }
    ];
  }

  return [
    { kind: "review", title: "Purchasing", text: status || "-" },
    { kind: "", title: "Kepala Purchasing", text: "-" }
  ];
}

function openDraftItemDialog(index = -1) {
  draftItemEditIndex = Number.isInteger(index) ? index : -1;

  clearSelectedItem();

  if (draftItemEditIndex >= 0 && draftRequestItems[draftItemEditIndex]) {
    const item = draftRequestItems[draftItemEditIndex];
    applySelectedItem(item);
    setFieldValue(getField("qty"), item.qty);
    setFieldValue(getField("attachment"), item.attachment === "-" ? "" : item.attachment);
    setFieldValue(getField("notes"), item.notes === "-" ? "" : item.notes);

    if (draftItemKicker) {
      draftItemKicker.textContent = "Edit Item";
    }

    if (draftItemTitle) {
      draftItemTitle.textContent = "Edit Detail Item Pengajuan";
    }

    if (saveDraftItemButton) {
      saveDraftItemButton.textContent = "Update Item";
    }
  } else {
    draftItemEditIndex = -1;

    if (draftItemKicker) {
      draftItemKicker.textContent = "Tambah Item";
    }

    if (draftItemTitle) {
      draftItemTitle.textContent = "Detail Item Pengajuan";
    }

    if (saveDraftItemButton) {
      saveDraftItemButton.textContent = "Simpan Item";
    }
  }

  openManagedModal(draftItemBackdrop, draftItemCard, openItemPickerButton);
}

function closeDraftItemDialog() {
  draftItemEditIndex = -1;
  clearSelectedItem();
  closeManagedModal(draftItemBackdrop, draftItemCard, draftItemForm);
}

function saveDraftItem() {
  if (draftItemForm && !draftItemForm.reportValidity()) {
    return;
  }

  const itemCode = String(getField("itemCode")?.value || "").trim();
  const itemName = String(getField("itemName")?.value || "").trim();
  const qty = String(getField("qty")?.value || "").trim();
  const selectedMasterItem = masterItems.find((item) => item.code === itemCode);

  if (!itemCode || !itemName) {
    showAlert("error", "Barang belum dipilih", "Pilih barang dari master sebelum menyimpan item.");
    openItemPickerButton?.focus();
    return;
  }

  if (!qty || Number(qty) <= 0) {
    showAlert("error", "Qty belum valid", "Isi qty item dengan angka lebih dari 0.");
    getField("qty")?.focus();
    return;
  }

  const duplicateIndex = draftRequestItems.findIndex((item) => item.code === itemCode);
  if (duplicateIndex >= 0 && duplicateIndex !== draftItemEditIndex) {
    showAlert(
      "warning",
      "Barang sudah ada di daftar",
      "Gunakan edit pada baris yang sudah ada bila ingin mengubah qty atau catatannya."
    );
    return;
  }

  const nextItem = {
    code: itemCode,
    name: itemName,
    category: String(getField("itemCategory")?.value || "").trim() || "-",
    qty,
    unit: String(getField("itemUnit")?.value || "").trim() || "-",
    brand: String(getField("itemBrand")?.value || "").trim() || "-",
    type: String(getField("itemType")?.value || "").trim() || "-",
    classification: String(getField("itemClassification")?.value || "").trim() || "-",
    status: selectedMasterItem?.status || "aktif",
    editableMasterFields: Boolean(selectedMasterItem?.editableMasterFields),
    estimate: "-",
    attachment: String(getField("attachment")?.value || "").trim() || "-",
    notes: String(getField("notes")?.value || "").trim() || "-"
  };

  if (nextItem.editableMasterFields) {
    const masterIndex = masterItems.findIndex((item) => item.code === nextItem.code);
    if (masterIndex >= 0) {
      masterItems[masterIndex] = {
        ...masterItems[masterIndex],
        name: nextItem.name,
        category: nextItem.category,
        unit: nextItem.unit,
        brand: nextItem.brand,
        type: nextItem.type,
        classification: nextItem.classification,
        status: nextItem.status,
        editableMasterFields: true
      };
    }
  }

  if (draftItemEditIndex >= 0) {
    draftRequestItems[draftItemEditIndex] = nextItem;
  } else {
    draftRequestItems.push(nextItem);
  }

  renderDraftItems();
  closeDraftItemDialog();
}

function removeDraftItem(index) {
  if (!Number.isInteger(index) || !draftRequestItems[index]) {
    return;
  }

  const removedItem = draftRequestItems[index];
  draftRequestItems.splice(index, 1);
  renderDraftItems();
  showAlert("warning", "Item dihapus", `${removedItem.name} dikeluarkan dari daftar pengajuan.`);
}

function renderDraftItems() {
  if (!draftItemsTableBody) {
    return;
  }

  if (!draftRequestItems.length) {
    draftItemsTableBody.innerHTML = `
      <tr>
        <td colspan="10" class="draft-empty-cell">
          Belum ada item di daftar. Klik <strong>Tambah Item</strong> untuk mulai mengisi detail.
        </td>
      </tr>
    `;
    return;
  }

  draftItemsTableBody.innerHTML = draftRequestItems
    .map(
      (item, index) => `
        <tr>
          <td>${escapeHtml(item.name)}<br /><span class="detail-label">${escapeHtml(item.code)}</span></td>
          <td>${escapeHtml(item.category)}</td>
          <td>${escapeHtml(item.qty)}</td>
          <td>${escapeHtml(item.unit)}</td>
          <td>${escapeHtml(item.brand)}</td>
          <td>${escapeHtml(item.type)}</td>
          <td>${escapeHtml(item.classification)}</td>
          <td>${escapeHtml(item.attachment)}</td>
          <td>${escapeHtml(item.notes)}</td>
          <td>
            <div class="table-action-group">
              <button class="table-action" type="button" data-edit-draft-item="${index}">Edit</button>
              <button class="table-action" type="button" data-remove-draft-item="${index}">Hapus</button>
            </div>
          </td>
        </tr>
      `
    )
    .join("");
}

function getServiceField(name) {
  return serviceItemForm?.querySelector(`[data-service-field="${name}"]`);
}

function openServiceItemDialog(index = -1) {
  serviceItemEditIndex = Number.isInteger(index) ? index : -1;
  serviceItemForm?.reset();

  if (serviceItemEditIndex >= 0 && draftServiceItems[serviceItemEditIndex]) {
    const item = draftServiceItems[serviceItemEditIndex];
    setFieldValue(getServiceField("description"), item.description || "");
    setFieldValue(getServiceField("cost"), item.cost || "");
    setFieldValue(getServiceField("vendor"), item.vendor || "");
    setFieldValue(getServiceField("location"), item.location || "");
    setFieldValue(getServiceField("notes"), item.notes || "");

    if (serviceItemKicker) {
      serviceItemKicker.textContent = "Edit Detail";
    }

    if (serviceItemTitle) {
      serviceItemTitle.textContent = "Edit Detail Jasa";
    }

    if (saveServiceItemButton) {
      saveServiceItemButton.textContent = "Update Detail";
    }
  } else {
    serviceItemEditIndex = -1;

    if (serviceItemKicker) {
      serviceItemKicker.textContent = "Tambah Detail";
    }

    if (serviceItemTitle) {
      serviceItemTitle.textContent = "Detail Jasa";
    }

    if (saveServiceItemButton) {
      saveServiceItemButton.textContent = "Simpan Detail";
    }
  }

  openManagedModal(serviceItemBackdrop, serviceItemCard, getServiceField("description"));
}

function closeServiceItemDialog(options = {}) {
  serviceItemEditIndex = -1;
  closeManagedModal(serviceItemBackdrop, serviceItemCard, serviceItemForm, options);
}

function saveServiceItem() {
  if (serviceItemForm && !serviceItemForm.reportValidity()) {
    return;
  }

  const item = {
    description: String(getServiceField("description")?.value || "").trim(),
    cost: String(getServiceField("cost")?.value || "").trim(),
    vendor: String(getServiceField("vendor")?.value || "").trim() || "-",
    location: String(getServiceField("location")?.value || "").trim() || "-",
    notes: String(getServiceField("notes")?.value || "").trim() || "-"
  };

  if (serviceItemEditIndex >= 0) {
    draftServiceItems[serviceItemEditIndex] = item;
  } else {
    draftServiceItems.push(item);
  }

  renderServiceItems();
  closeServiceItemDialog();
}

function removeServiceItem(index) {
  if (!Number.isInteger(index) || !draftServiceItems[index]) {
    return;
  }

  draftServiceItems.splice(index, 1);
  renderServiceItems();
}

function renderServiceItems() {
  if (!serviceItemsTableBody) {
    return;
  }

  if (!draftServiceItems.length) {
    serviceItemsTableBody.innerHTML = `
      <tr>
        <td colspan="7" class="empty-table-cell">Belum ada detail jasa.</td>
      </tr>
    `;
    return;
  }

  serviceItemsTableBody.innerHTML = draftServiceItems
    .map(
      (item, index) => `
        <tr>
          <td>${index + 1}</td>
          <td>${escapeHtml(item.description)}</td>
          <td>${escapeHtml(item.cost)}</td>
          <td>${escapeHtml(item.vendor)}</td>
          <td>${escapeHtml(item.location)}</td>
          <td>${escapeHtml(item.notes)}</td>
          <td>
            <div class="table-action-group">
              <button class="table-action" type="button" data-edit-service-item="${index}">Edit</button>
              <button class="table-action" type="button" data-remove-service-item="${index}">Hapus</button>
            </div>
          </td>
        </tr>
      `
    )
    .join("");
}

function getQuoteField(name) {
  return quoteItemForm?.querySelector(`[data-quote-field="${name}"]`);
}

function openQuoteItemDialog(index = -1) {
  quoteItemEditIndex = Number.isInteger(index) ? index : -1;
  quoteItemForm?.reset();
  populateQuoteRequestItemOptions();

  if (quoteItemEditIndex >= 0 && draftQuoteItems[quoteItemEditIndex]) {
    const item = draftQuoteItems[quoteItemEditIndex];
    setFieldValue(getQuoteField("requestItem"), item.itemCode || "");
    setFieldValue(getQuoteField("vendor"), item.vendor || "");
    setFieldValue(getQuoteField("unitPrice"), item.unitPrice || "");
    setFieldValue(getQuoteField("paymentMethod"), item.paymentMethod || "");
    setFieldValue(getQuoteField("delivery"), item.delivery || "");
    setFieldValue(getQuoteField("leadTime"), item.leadTime || "");

    if (quoteItemKicker) {
      quoteItemKicker.textContent = "Edit Penawaran";
    }

    if (quoteItemTitle) {
      quoteItemTitle.textContent = "Edit Penawaran Vendor";
    }

    if (saveQuoteItemButton) {
      saveQuoteItemButton.textContent = "Update Penawaran";
    }
  } else {
    quoteItemEditIndex = -1;

    if (quoteItemKicker) {
      quoteItemKicker.textContent = "Tambah Penawaran";
    }

    if (quoteItemTitle) {
      quoteItemTitle.textContent = "Detail Penawaran Vendor";
    }

    if (saveQuoteItemButton) {
      saveQuoteItemButton.textContent = "Simpan Penawaran";
    }
  }

  openManagedModal(quoteItemBackdrop, quoteItemCard, getQuoteField("requestItem"));
}

function populateQuoteRequestItemOptions() {
  const itemField = getQuoteField("requestItem");
  if (!itemField) {
    return;
  }

  const options = selectedRequestItems.length
    ? selectedRequestItems
    : getRequestDetailItems(String(getField("requestCode")?.value || ""));

  itemField.innerHTML = `
    <option value="">Pilih barang dari detail pengajuan</option>
    ${options
      .map(
        (item) =>
          `<option value="${escapeHtml(item.code)}">${escapeHtml(item.name)} - ${escapeHtml(item.qty)} ${escapeHtml(item.unit)}</option>`
      )
      .join("")}
  `;
}

function closeQuoteItemDialog(options = {}) {
  quoteItemEditIndex = -1;
  closeManagedModal(quoteItemBackdrop, quoteItemCard, quoteItemForm, options);
}

function parseCurrencyValue(value) {
  const normalized = String(value || "")
    .replace(/[^\d,.-]/g, "")
    .replace(/\./g, "")
    .replace(",", ".");
  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : 0;
}

function formatRupiah(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(value || 0);
}

function getQuotePriceIncludePpn(item) {
  const price = parseCurrencyValue(item.unitPrice);
  return item.taxIncluded ? formatRupiah(Math.round(price * 1.11)) : item.unitPrice;
}

function saveQuoteItem() {
  if (quoteItemForm && !quoteItemForm.reportValidity()) {
    return;
  }

  const itemCode = String(getQuoteField("requestItem")?.value || "").trim();
  const requestItem = (selectedRequestItems.length
    ? selectedRequestItems
    : getRequestDetailItems(String(getField("requestCode")?.value || ""))
  ).find((item) => item.code === itemCode);
  if (!requestItem) {
    showAlert("error", "Barang belum dipilih", "Pilih barang dari detail pengajuan terkait.");
    getQuoteField("requestItem")?.focus();
    return;
  }

  const item = {
    itemCode: requestItem.code,
    itemName: requestItem.name,
    itemQty: requestItem.qty,
    itemUnit: requestItem.unit,
    vendor: String(getQuoteField("vendor")?.value || "").trim(),
    unitPrice: String(getQuoteField("unitPrice")?.value || "").trim(),
    taxIncluded: draftQuoteItems[quoteItemEditIndex]?.taxIncluded || false,
    tax: draftQuoteItems[quoteItemEditIndex]?.taxIncluded ? "hitung_ppn_11" : "harga_sudah_include_ppn",
    paymentMethod: String(getQuoteField("paymentMethod")?.value || "").trim(),
    delivery: String(getQuoteField("delivery")?.value || "").trim() || "-",
    leadTime: String(getQuoteField("leadTime")?.value || "").trim() || "-",
    selected: Boolean(draftQuoteItems[quoteItemEditIndex]?.selected)
  };

  const duplicateIndex = draftQuoteItems.findIndex(
    (quote) => quote.itemCode === item.itemCode && quote.vendor === item.vendor
  );
  if (duplicateIndex >= 0 && duplicateIndex !== quoteItemEditIndex) {
    showAlert("error", "Penawaran sudah ada", "Vendor ini sudah punya penawaran untuk barang yang sama.");
    getQuoteField("vendor")?.focus();
    return;
  }

  if (quoteItemEditIndex >= 0) {
    draftQuoteItems[quoteItemEditIndex] = item;
  } else {
    draftQuoteItems.push(item);
  }

  renderQuoteItems();
  closeQuoteItemDialog();
}

function toggleQuoteTax(index) {
  if (!Number.isInteger(index) || !draftQuoteItems[index]) {
    return;
  }

  draftQuoteItems[index].taxIncluded = !draftQuoteItems[index].taxIncluded;
  draftQuoteItems[index].tax = draftQuoteItems[index].taxIncluded ? "hitung_ppn_11" : "harga_sudah_include_ppn";
  renderQuoteItems();
}

function toggleQuoteSelected(index) {
  if (!["kepala_purchasing", "admin"].includes(activeRole)) {
    showAlert("warning", "Akses dibatasi", `${getActiveRoleLabel()} tidak dapat memilih barang/vendor penawaran.`);
    return;
  }

  if (!Number.isInteger(index) || !draftQuoteItems[index]) {
    return;
  }

  const nextValue = !draftQuoteItems[index].selected;
  const itemCode = draftQuoteItems[index].itemCode;
  draftQuoteItems = draftQuoteItems.map((quote, quoteIndex) => ({
    ...quote,
    selected: quote.itemCode === itemCode ? quoteIndex === index ? nextValue : false : quote.selected
  }));
  renderQuoteItems();
}

function toggleDetailQuoteSelected(code, index) {
  if (!["kepala_purchasing", "admin"].includes(activeRole)) {
    showAlert("warning", "Akses dibatasi", `${getActiveRoleLabel()} tidak dapat memilih barang/vendor penawaran.`);
    return;
  }

  const record = detailRecords[code];
  if (!record || record.header.status !== "menunggu_persetujuan_purchasing") {
    showAlert("warning", "Status tidak valid", "Vendor hanya dapat dipilih saat menunggu approval Kepala Purchasing.");
    return;
  }

  if (!Number.isInteger(index) || !record.quotes?.[index]) {
    return;
  }

  const nextValue = !record.quotes[index].selected;
  const itemCode = record.quotes[index].itemCode;
  record.quotes = record.quotes.map((quote, quoteIndex) => ({
    ...quote,
    selected: quote.itemCode === itemCode ? quoteIndex === index ? nextValue : false : quote.selected
  }));
  renderDetailModal(record, code);
}

function removeQuoteItem(index) {
  if (!Number.isInteger(index) || !draftQuoteItems[index]) {
    return;
  }

  draftQuoteItems.splice(index, 1);
  renderQuoteItems();
}

function renderQuoteItems() {
  if (!quoteItemsTableBody) {
    return;
  }

  if (!draftQuoteItems.length) {
    quoteItemsTableBody.innerHTML = `
      <tr>
        <td colspan="10" class="empty-table-cell">Belum ada item penawaran.</td>
      </tr>
    `;
    return;
  }

  quoteItemsTableBody.innerHTML = getQuoteItemGroups(draftQuoteItems)
    .map((group) => {
      const groupHeader = `
        <tr class="table-group-row">
          <td colspan="10">
            <strong>${escapeHtml(group.name)}</strong>
            <span>${escapeHtml(group.qty)} ${escapeHtml(group.unit)} - ${group.items.length} penawaran vendor</span>
          </td>
        </tr>
      `;
      const rows = group.items
        .map(({ item, index }) => {
        const canSelectQuote = ["kepala_purchasing", "admin"].includes(activeRole);

        return `
          <tr>
            <td>${escapeHtml(item.itemName || "-")}</td>
            <td>${escapeHtml(item.vendor)}</td>
            <td>${escapeHtml(item.unitPrice)}</td>
            <td>
              <button
                class="mini-toggle"
                data-active="${item.taxIncluded ? "true" : "false"}"
                data-toggle-quote-tax="${index}"
                type="button"
                aria-label="Toggle PPN ${escapeHtml(item.itemName || item.vendor || "-")}"
              >
                <span></span>
              </button>
            </td>
            <td>${escapeHtml(getQuotePriceIncludePpn(item))}</td>
            <td>${escapeHtml(item.paymentMethod)}</td>
            <td>${escapeHtml(item.delivery)}</td>
            <td>${escapeHtml(item.leadTime)}</td>
            <td>
              ${
                canSelectQuote
                  ? `<button
                      class="choice-toggle"
                      data-active="${item.selected ? "true" : "false"}"
                      data-toggle-quote-selected="${index}"
                      type="button"
                      aria-label="Pilih vendor ${escapeHtml(item.vendor || "-")} untuk ${escapeHtml(item.itemName || "-")}"
                    ></button>`
                  : `<span class="choice-toggle is-readonly" data-active="${item.selected ? "true" : "false"}"></span>`
              }
            </td>
            <td>
              <div class="table-action-group">
                <button class="table-action" type="button" data-edit-quote-item="${index}">Edit</button>
                <button class="table-action" type="button" data-remove-quote-item="${index}">Hapus</button>
              </div>
            </td>
          </tr>
        `;
        })
        .join("");

      return `${groupHeader}${rows}`;
    })
    .join("");
}

function getQuoteItemGroups(quotes = []) {
  const groups = [];
  quotes.forEach((item, index) => {
    const key = item.itemCode || item.itemName || `item-${index}`;
    let group = groups.find((entry) => entry.key === key);
    if (!group) {
      group = {
        key,
        name: item.itemName || "-",
        qty: item.itemQty || "-",
        unit: item.itemUnit || "",
        items: []
      };
      groups.push(group);
    }
    group.items.push({ item, index });
  });
  return groups;
}

function renderPoOfferPicker() {
  if (!poOfferPickerList) {
    return;
  }

  if (!selectedPoOffers.length) {
    poOfferPickerList.innerHTML = `
      <tr>
        <td colspan="9" class="empty-table-cell">Belum ada penawaran terpilih.</td>
      </tr>
    `;
    return;
  }

  const filteredOffers = getFilteredPoOffers();
  if (!filteredOffers.length) {
    poOfferPickerList.innerHTML = `
      <tr>
        <td colspan="9" class="empty-table-cell">Tidak ada penawaran sesuai filter.</td>
      </tr>
    `;
    return;
  }

  poOfferPickerList.innerHTML = filteredOffers
    .map(
      ({ offer, index }) => {
        const isSelected = draftPoItems.some((item) => getPoItemKey(item) === getPoItemKey(offer));
        const isChecked = selectedPoOfferIndexes.has(index);

        return `
        <tr>
          <td>
            <input
              type="checkbox"
              data-toggle-po-offer="${index}"
              ${isSelected ? "disabled checked" : ""}
              ${!isSelected && isChecked ? "checked" : ""}
              aria-label="Pilih ${escapeHtml(offer.quoteCode)}"
            />
          </td>
          <td>${escapeHtml(offer.quoteCode)}</td>
          <td>${escapeHtml(offer.requestCode || "-")}</td>
          <td>${escapeHtml(offer.itemName || "-")}</td>
          <td>${escapeHtml(offer.vendor)}</td>
          <td>${escapeHtml(offer.paymentMethod || "-")}</td>
          <td>${escapeHtml(offer.qty || "-")}</td>
          <td>${escapeHtml(offer.unit || "-")}</td>
          <td>${escapeHtml(offer.totalPrice || offer.price || "-")}</td>
        </tr>
      `;
      }
    )
    .join("");
}

function getFilteredPoOffers() {
  const query = String(poOfferPickerSearch?.value || "").trim().toLowerCase();
  const payment = String(poOfferPaymentFilter?.value || "").trim();

  return selectedPoOffers
    .map((offer, index) => ({ offer, index }))
    .filter(({ offer }) => {
      const matchesPayment = !payment || offer.paymentMethod === payment;
      const haystack = [
        offer.quoteCode,
        offer.requestCode,
        offer.itemName,
        offer.vendor,
        offer.paymentMethod,
        offer.qty,
        offer.unit,
        offer.totalPrice,
        offer.subtotal
      ]
        .join(" ")
        .toLowerCase();
      return matchesPayment && (!query || haystack.includes(query));
    });
}

function addSelectedPoOffers() {
  const indexes = Array.from(selectedPoOfferIndexes).filter(
    (index) =>
      Number.isInteger(index) &&
      selectedPoOffers[index] &&
      !draftPoItems.some((item) => getPoItemKey(item) === getPoItemKey(selectedPoOffers[index]))
  );

  if (!indexes.length) {
    showAlert("warning", "Belum ada penawaran dipilih", "Centang minimal satu penawaran sebelum menekan pilih.");
    return false;
  }

  const newItems = indexes.map((index) => ({ ...selectedPoOffers[index] }));

  draftPoItems = [...draftPoItems, ...newItems];
  selectedPoOfferIndexes = new Set();
  syncPoVendorFromItems();
  renderPoItems();
  renderPoOfferPicker();
  return true;
}

function getPoItemKey(item) {
  return [item.quoteCode, item.requestCode, item.itemName].filter(Boolean).join("|");
}

function removePoItem(index) {
  if (!Number.isInteger(index) || !draftPoItems[index]) {
    return;
  }

  draftPoItems.splice(index, 1);
  syncPoVendorFromItems();
  renderPoItems();
}

function syncPoVendorFromItems() {
  const vendors = Array.from(new Set(draftPoItems.map((item) => item.vendor).filter(Boolean)));
  if (!vendors.length) {
    setFieldValue(getField("vendor"), selectedPoOffers[0]?.vendor || "");
    return;
  }

  setFieldValue(getField("vendor"), vendors.length === 1 ? vendors[0] : `${vendors.length} vendor terpilih`);
}

function renderPoItems() {
  if (!poItemsTableBody) {
    return;
  }

  if (!draftPoItems.length) {
    poItemsTableBody.innerHTML = `
      <tr>
        <td colspan="6" class="empty-table-cell">Belum ada detail PO.</td>
      </tr>
    `;
    updatePoSubtotalSummary(draftPoItems);
    return;
  }

  poItemsTableBody.innerHTML = draftPoItems
    .map(
      (item, index) => `
        <tr>
          <td>${escapeHtml(item.requestCode || "-")}</td>
          <td>${escapeHtml(item.itemName || "-")}</td>
          <td>${escapeHtml(item.qty || "-")}</td>
          <td>${escapeHtml(item.unit || "-")}</td>
          <td>${escapeHtml(item.totalPrice || item.price || "-")}</td>
          <td><button class="table-action" type="button" data-remove-po-item="${index}">Hapus</button></td>
        </tr>
      `
    )
    .join("");
  updatePoSubtotalSummary(draftPoItems);
}

function updatePoSubtotalSummary(items = []) {
  if (!poItemsSubtotal) {
    return;
  }

  poItemsSubtotal.textContent = formatRupiah(sumPoSubtotal(items));
}

function sumPoSubtotal(items = []) {
  return items.reduce((total, item) => total + parseCurrencyValue(item.subtotal || item.totalPrice || item.price || 0), 0);
}

function formatRupiah(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(Number(value) || 0);
}

function buildJasaDetailMarkup(record) {
  const status = String(record.header.status || "");
  const serviceRows = (record.services || [])
    .map(
      (item, index) => `
        <tr>
          <td>${escapeHtml(item.no || index + 1)}</td>
          <td>${escapeHtml(item.description)}</td>
          <td>${escapeHtml(item.cost)}</td>
          <td>${escapeHtml(item.vendor || "-")}</td>
          <td>${escapeHtml(item.location || "-")}</td>
          <td>${escapeHtml(item.notes || "-")}</td>
        </tr>
      `
    )
    .join("") || `
      <tr>
        <td colspan="6" class="empty-table-cell">Belum ada detail jasa.</td>
      </tr>
    `;
  const approvalRows = getPengajuanApprovalSteps(record)
    .map(
      (step) => `
        <div class="approval-step" data-kind="${escapeHtml(step.kind || "pending")}">
          <div class="approval-person">${escapeHtml(step.title)}</div>
          <div class="approval-track"><span class="approval-dot"></span></div>
          <div class="approval-state">${escapeHtml(step.text)}</div>
        </div>
      `
    )
    .join("");

  return `
    <div class="modal-detail-stack">
      <section class="approval-strip" aria-label="Alur approval">
        <div class="approval-flow approval-flow-horizontal">
          ${approvalRows}
        </div>
      </section>

      <section class="form-section">
        <div class="form-section-head">
          <strong>Data Pengajuan</strong>
        </div>
        <div class="detail-list">
          <div class="detail-row">
            <div class="detail-label">No Pengajuan</div>
            <div class="detail-value">${escapeHtml(record.header.code)}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Divisi</div>
            <div class="detail-value">${escapeHtml(record.header.division)}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Jenis Pengajuan</div>
            <div class="detail-value">${escapeHtml(record.header.requestType || "jasa")}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Jenis Pengadaan</div>
            <div class="detail-value">${escapeHtml(record.header.serviceProcurementType || "-")}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Prioritas</div>
            <div class="detail-value">${escapeHtml(record.header.priority)}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Tanggal</div>
            <div class="detail-value">${escapeHtml(record.header.submitDate)}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Max Tgl Beli</div>
            <div class="detail-value">${escapeHtml(record.header.targetDate)}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Status</div>
            <div class="detail-value">
              <span class="status-chip ${getStatusChipClass(status)}">${escapeHtml(status)}</span>
            </div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Alasan</div>
            <div class="detail-value">${escapeHtml(record.header.reason)}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Kebutuhan Jasa</div>
            <div class="detail-value">${escapeHtml(record.header.serviceNeed || "-")}</div>
          </div>
        </div>
      </section>

      <section class="form-section">
        <div class="form-section-head">
          <strong>Detail Jasa</strong>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>No Detail</th>
                <th>Uraian Jasa / Pekerjaan</th>
                <th>Biaya</th>
                <th>Vendor / Penyedia</th>
                <th>Lokasi</th>
                <th>Keterangan</th>
              </tr>
            </thead>
            <tbody>${serviceRows}</tbody>
          </table>
        </div>
      </section>
    </div>
  `;
}

function buildProcurementPembelianMarkup(record) {
  return `
    <div class="modal-detail-stack">
      <section class="form-section">
        <div class="form-section-head">
          <strong>Data Procurement</strong>
        </div>
        <div class="detail-list">
          <div class="detail-row">
            <div class="detail-label">No Procurement</div>
            <div class="detail-value">${escapeHtml(record.header.code)}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Ref Pengajuan</div>
            <div class="detail-value">${escapeHtml(record.header.requestCode)}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Divisi</div>
            <div class="detail-value">${escapeHtml(record.header.division)}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">PIC Purchasing</div>
            <div class="detail-value">${escapeHtml(record.header.pic)}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Jalur Order</div>
            <div class="detail-value">${escapeHtml(record.header.orderType)}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Target Sourcing</div>
            <div class="detail-value">${escapeHtml(record.header.targetDate)}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Status</div>
            <div class="detail-value">${escapeHtml(record.header.status)}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Kebutuhan Final</div>
            <div class="detail-value">${escapeHtml(record.header.need)}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Catatan</div>
            <div class="detail-value">${escapeHtml(record.header.notes)}</div>
          </div>
        </div>
      </section>
    </div>
  `;
}

function buildProcurementPenawaranMarkup(record) {
  const canSelectQuote =
    ["kepala_purchasing", "admin"].includes(activeRole) &&
    record.header.status === "menunggu_persetujuan_purchasing";
  const approvalRows = getPenawaranApprovalSteps(record)
    .map(
      (step) => `
        <div class="approval-step" data-kind="${escapeHtml(step.kind || "pending")}">
          <div class="approval-person">${escapeHtml(step.title)}</div>
          <div class="approval-track"><span class="approval-dot"></span></div>
          <div class="approval-state">${escapeHtml(step.text)}</div>
        </div>
      `
    )
    .join("");
  const quoteRows = (record.quotes || [])
    .length
    ? getQuoteItemGroups(record.quotes || [])
        .map((group) => {
          const groupHeader = `
            <tr class="table-group-row">
              <td colspan="8">
                <strong>${escapeHtml(group.name)}</strong>
                <span>${escapeHtml(group.qty)} ${escapeHtml(group.unit)} - ${group.items.length} penawaran vendor</span>
              </td>
            </tr>
          `;
          const rows = group.items
            .map(({ item: quote, index }) => `
              <tr>
                <td>${escapeHtml(quote.vendor)}</td>
                <td>${escapeHtml(quote.unitPrice || "-")}</td>
                <td>
                  <span class="mini-toggle" data-active="${quote.taxIncluded ? "true" : "false"}">
                    <span></span>
                  </span>
                </td>
                <td>${escapeHtml(getQuotePriceIncludePpn(quote))}</td>
                <td>${escapeHtml(quote.paymentMethod || "-")}</td>
                <td>${escapeHtml(quote.delivery || "-")}</td>
                <td>${escapeHtml(quote.leadTime || "-")}</td>
                <td>
                  ${
                    canSelectQuote
                      ? `<button
                          class="choice-toggle"
                          data-active="${quote.selected ? "true" : "false"}"
                          data-toggle-detail-quote-selected="${index}"
                          data-approval-code="${escapeHtml(record.header.requestCode)}"
                          type="button"
                          aria-label="Pilih vendor ${escapeHtml(quote.vendor || "-")}"
                        ></button>`
                      : `<span class="choice-toggle is-readonly" data-active="${quote.selected ? "true" : "false"}"></span>`
                  }
                </td>
              </tr>
            `)
            .join("");

          return `${groupHeader}${rows}`;
        })
        .join("")
    : ""
  || `
      <tr>
        <td colspan="8" class="empty-table-cell">Belum ada penawaran vendor.</td>
      </tr>
    `;

  return `
    <div class="modal-detail-stack">
      <section class="approval-strip" aria-label="Alur approval">
        <div class="approval-flow approval-flow-horizontal approval-flow-compact">
          ${approvalRows}
        </div>
      </section>

      <section class="form-section">
        <div class="form-section-head">
          <strong>Data Penawaran</strong>
        </div>
        <div class="detail-list">
          <div class="detail-row">
            <div class="detail-label">No Penawaran</div>
            <div class="detail-value">${escapeHtml(record.header.quoteCode || "-")}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">No Pengajuan</div>
            <div class="detail-value">${escapeHtml(record.header.requestCode)}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Status</div>
            <div class="detail-value">${escapeHtml(record.header.status)}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Kebutuhan</div>
            <div class="detail-value">${escapeHtml(record.header.need)}</div>
          </div>
        </div>
      </section>

      <section class="form-section">
        <div class="form-section-head">
          <strong>Perbandingan Vendor</strong>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Vendor</th>
                <th>Harga (Rp)</th>
                <th>PPN</th>
                <th>Harga Include PPN</th>
                <th>Pembayaran</th>
                <th>Pengiriman</th>
                <th>Lead Time</th>
                <th>Barang Dipilih</th>
              </tr>
            </thead>
            <tbody>${quoteRows}</tbody>
          </table>
        </div>
      </section>
    </div>
  `;
}

function buildProcurementPOMarkup(record) {
  const approvalRows = getPoApprovalSteps(record)
    .map(
      (step) => `
        <div class="approval-step" data-kind="${escapeHtml(step.kind || "pending")}">
          <div class="approval-person">${escapeHtml(step.title)}</div>
          <div class="approval-track"><span class="approval-dot"></span></div>
          <div class="approval-state">${escapeHtml(step.text)}</div>
        </div>
      `
    )
    .join("");
  const itemRows = (record.items || [])
    .map(
      (item) => `
        <tr>
          <td>${escapeHtml(item.requestCode || "-")}</td>
          <td>${escapeHtml(item.itemName || "-")}</td>
          <td>${escapeHtml(item.qty || "-")}</td>
          <td>${escapeHtml(item.unit || "-")}</td>
          <td>${escapeHtml(item.totalPrice || item.price || "-")}</td>
          <td>${escapeHtml(item.note)}</td>
        </tr>
      `
    )
    .join("");

  return `
    <div class="modal-detail-stack">
      <section class="approval-strip" aria-label="Alur approval PO">
        <div class="approval-flow approval-flow-horizontal approval-flow-compact">
          ${approvalRows}
        </div>
      </section>

      <section class="form-section">
        <div class="form-section-head">
          <strong>Data PO</strong>
        </div>
        <div class="detail-list">
          <div class="detail-row">
            <div class="detail-label">No PO</div>
            <div class="detail-value">${escapeHtml(record.header.code)}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Penawaran</div>
            <div class="detail-value">${escapeHtml(record.header.offerCode || getPoOfferSummary(record.items))}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Vendor Final</div>
            <div class="detail-value">${escapeHtml(record.header.vendor)}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Tanggal PO</div>
            <div class="detail-value">${escapeHtml(record.header.poDate)}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Status</div>
            <div class="detail-value">${escapeHtml(record.header.status)}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Catatan</div>
            <div class="detail-value">${escapeHtml(record.header.notes || "-")}</div>
          </div>
        </div>
      </section>

      <section class="form-section">
        <div class="form-section-head">
          <strong>Item PO</strong>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>No Pengajuan</th>
                <th>Nama Barang</th>
                <th>Jumlah</th>
                <th>Satuan</th>
                <th>Total Harga</th>
                <th>Catatan</th>
              </tr>
            </thead>
            <tbody>${itemRows}</tbody>
          </table>
        </div>
        <div class="table-summary">
          <span>Subtotal Total Harga</span>
          <strong>${escapeHtml(formatRupiah(sumPoSubtotal(record.items || [])))}</strong>
        </div>
      </section>
    </div>
  `;
}

function getField(name) {
  return document.querySelector(`[data-field="${name}"]`);
}

function getPrimaryDraftValue() {
  if (detailViewType === "pengajuan-barang" || detailViewType === "pengajuan-jasa") {
    return getNextRequestReference();
  }

  if (detailViewType === "procurement-pembelian") {
    return getNextWorkflowReference("PRC");
  }

  if (detailViewType === "procurement-penawaran") {
    return "";
  }

  if (detailViewType === "procurement-po") {
    return getNextWorkflowReference("PO");
  }

  if (entitySingular.toLowerCase() === "barang") {
    return getNextItemCode();
  }

  return "";
}

function applyCreateDefaults() {
  const statusField = getField("status");

  if (detailViewType === "procurement-penawaran") {
    setFieldValue(getField("quoteDate"), formatDateDisplay(new Date()));
    setFieldValue(getField("quoteCode"), getNextQuoteReference());
  }

  if (detailViewType === "procurement-penawaran" && statusField) {
    statusField.value = "draft";
  }

  if (detailViewType === "procurement-po" && statusField) {
    statusField.value = "draft";
  }

  if (detailViewType === "procurement-po") {
    setFieldValue(getField("poDate"), formatDateDisplay(new Date()));
  }

  if (entitySingular.toLowerCase() !== "barang") {
    return;
  }

  const classificationField = getField("classification");

  if (classificationField) {
    classificationField.value = "non_aset";
  }

  if (statusField) {
    statusField.value = "aktif";
  }
}

function getStatusChipClass(statusValue) {
  const status = String(statusValue || "").toLowerCase();

  if (status.includes("usulan")) {
    return "review";
  }

  if (status.includes("aktif") || status.includes("approved") || status.includes("siap") || status.includes("selesai")) {
    return "success";
  }

  if (status.includes("nonaktif") || status.includes("ditolak") || status.includes("dibatalkan")) {
    return "danger";
  }

  if (status.includes("review")) {
    return "info";
  }

  return "waiting";
}

function getNextRequestReference() {
  const today = new Date();
  const year = String(today.getFullYear());
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const prefix = `${year}/PP/${activeDivisionCode}/${month}/`;

  const nextNumber =
    Object.keys(detailRecords)
      .filter((code) => code.startsWith(prefix))
      .map((code) => Number(code.split("/").pop()))
      .filter((value) => Number.isFinite(value))
      .reduce((max, value) => Math.max(max, value), 0) + 1;

  return `${prefix}${String(nextNumber).padStart(4, "0")}`;
}

function getNextWorkflowReference(prefix) {
  const year = String(new Date().getFullYear());
  const matcher = new RegExp(`^${prefix}-${year}-(\\d+)$`, "i");

  const nextNumber =
    Object.keys(detailRecords)
      .map((code) => {
        const matched = String(code).match(matcher);
        return matched ? Number(matched[1]) : NaN;
      })
      .filter((value) => Number.isFinite(value))
      .reduce((max, value) => Math.max(max, value), 0) + 1;

  return `${prefix}-${year}-${String(nextNumber).padStart(4, "0")}`;
}

function getNextQuoteReference() {
  const year = String(new Date().getFullYear());
  const matcher = new RegExp(`^PNW-${year}-(\\d+)$`, "i");
  const quoteCodes = [
    String(getField("quoteCode")?.value || ""),
    ...Object.values(detailRecords).map((record) => record.header?.quoteCode),
    ...Object.values(detailRecords).flatMap((record) => (record.quotes || []).map((quote) => quote.code))
  ];

  const nextNumber =
    quoteCodes
      .map((code) => {
        const matched = String(code || "").match(matcher);
        return matched ? Number(matched[1]) : NaN;
      })
      .filter((value) => Number.isFinite(value))
      .reduce((max, value) => Math.max(max, value), 0) + 1;

  return `PNW-${year}-${String(nextNumber).padStart(4, "0")}`;
}

function formatDateDisplay(date) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(date);
}

function formatDateInput(value) {
  if (!value) {
    return "-";
  }

  const [year, month, day] = value.split("-").map(Number);
  return formatDateDisplay(new Date(year, (month || 1) - 1, day || 1));
}

function parseDisplayDateToInput(value) {
  if (!value || value === "-") {
    return "";
  }

  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return value;
  }

  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return "";
  }

  const year = parsed.getFullYear();
  const month = String(parsed.getMonth() + 1).padStart(2, "0");
  const day = String(parsed.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function recordExists(code) {
  return masterItems.some((item) => item.code === code);
}

function getNextItemCode() {
  const nextNumber =
    masterItems
      .map((item) => {
        const matched = String(item.code || "").match(/^BRG-(\d+)$/i);
        return matched ? Number(matched[1]) : NaN;
      })
      .filter((value) => Number.isFinite(value))
      .reduce((max, value) => Math.max(max, value), 0) + 1;

  return `BRG-${String(nextNumber).padStart(4, "0")}`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
